import React from "react";

interface FarmPhotoUploadProps {
  photos: File[];
  onPhotoUpload: (photos: File[]) => void;
}

export const FarmPhotoUpload: React.FC<FarmPhotoUploadProps> = ({
  photos,
  onPhotoUpload,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedPhotos = Array.from(e.target.files);
      onPhotoUpload(selectedPhotos);
    }
  };

  return (
    <div>
      <p>Add at least 4 images of your farm area.</p>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        accept="image/*"
      />
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={URL.createObjectURL(photo)}
            alt={`Farm Photo ${index + 1}`}
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        ))}
      </div>
    </div>
  );
};
