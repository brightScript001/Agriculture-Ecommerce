import { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { formatImageSize } from "../utils/ImageUtils";
import ImageCropper from "./ImageCropper";
import { useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const { setValue } = useFormContext() || {}; // Default to an empty object to avoid destructure errors

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const isValid = formatImageSize(file);
      if (isValid) {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
        if (setValue) setValue("image", file);
      } else {
        toast.error("Invalid image. Please upload an image less than 5MB.");
      }
    },
  });

  const handleCrop = (croppedImage: string) => {
    setCroppedImage(croppedImage);
    if (setValue) setValue("image", croppedImage);
  };

  // Cleanup URL when component unmounts
  useEffect(() => {
    return () => {
      if (selectedImage) URL.revokeObjectURL(selectedImage);
    };
  }, [selectedImage]);

  return (
    <Box>
      <Box
        {...getRootProps()}
        border="2px dashed #ddd"
        p={2}
        textAlign="center"
        mb={2}
      >
        <input {...getInputProps()} />
        <Typography>
          Drag 'n' drop an image here, or click to select one
        </Typography>
      </Box>
      {selectedImage && (
        <ImageCropper image={selectedImage} onCrop={handleCrop} />
      )}
      {croppedImage && (
        <Box mt={2}>
          <Typography variant="h6">Cropped Image Preview:</Typography>
          <img
            src={croppedImage}
            alt="Cropped"
            style={{ width: "100%", maxHeight: "300px", objectFit: "contain" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default UploadImage;
