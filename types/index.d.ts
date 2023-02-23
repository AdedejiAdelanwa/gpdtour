export {};
declare global {
  interface Window {
    cloudinary: {
      createUploadWidget: function;
    };
  }
}
