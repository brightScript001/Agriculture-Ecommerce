import React, { useRef, useState } from "react";
import getCroppedImg from "../utils/cropImageUtils";
import styled from "styled-components";
import Cropper from "react-easy-crop";
import { Button } from "@mui/material";

interface Crop {
  x: number;
  y: number;
}

interface ImageCropperProps {
  image: string;
  onCrop: (croppedImage: string) => void;
}

const ImageCropperWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ImageCropper: React.FC<ImageCropperProps> = ({ image, onCrop }) => {
  const [crop, setCrop] = useState<Crop>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const crooperRef = useRef<HTMLDivElement | null>(null);

  const handleCropComplete = async (crop: Crop) => {
    try {
      const croppedImage = await getCroppedImg(image, crop);
      onCrop(croppedImage);
    } catch (error) {
      console.log("cropped failed", error);
    }
  };

  return (
    <ImageCropperWrapper>
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={4 / 3}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={handleCropComplete}
      />

      <StyledButton
        variant="contained"
        color="primary"
        onClick={() => handleCropComplete(crop)}
      >
        Crop Image
      </StyledButton>
    </ImageCropperWrapper>
  );
};

export default ImageCropper;
