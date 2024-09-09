export const formatImageSize = (file: File): boolean => {
  const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  return file.size <= maxSize;
};
