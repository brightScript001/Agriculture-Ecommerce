interface Crop {
  x: number;
  y: number;
  width: number;
  height: number;
}

const getCroppedImg = (imageSrc: string, crop: Crop): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageSrc;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject("Failed to get canvas context");
        return;
      }

      if (crop.x < 0 || crop.y < 0 || crop.width <= 0 || crop.height <= 0) {
        reject("Invalid crop dimensions");
        return;
      }

      if (
        crop.x + crop.width > img.width ||
        crop.y + crop.height > img.height
      ) {
        reject("Crop dimensions exceed image bounds");
        return;
      }

      canvas.width = crop.width;
      canvas.height = crop.height;

      ctx.drawImage(
        img,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
      );

      canvas.toBlob((blob) => {
        if (blob) {
          resolve(URL.createObjectURL(blob));
        } else {
          reject("Failed to crop image");
        }
      }, "image/jpeg");
    };

    img.onerror = () => reject("Failed to load image");
  });
};

export default getCroppedImg;
