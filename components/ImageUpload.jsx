import { openUploadWidget } from "../utils/CloudinaryServices";

export const ImageUpload = (props) => {
  const uploadImageWidget = () => {
    console.log(props);
    let myUploadWidget = openUploadWidget(
      {
        cloudName: props.cloud_name,
        uploadPreset: props.upload_preset,

        sources: ["local", "url"],
      },
      function (error, result) {
        if (!error && result.event === "success") {
          props.onImageUpload(result.info.public_id);
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className="greenButton" onClick={uploadImageWidget}>
      Upload Image
    </button>
  );
};
