"use client";

import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { useState } from "react";

const present = "food-images";

export const CldUpload = () => {
  const [image, setImage] = useState("");

  const onUploadImage = (result: CloudinaryUploadWidgetResults) => {
    const info = result.info;

    if (typeof info === "object" && info.secure_url) {
      setImage(info.secure_url);
    }
  };

  return (
    <CldUploadWidget uploadPreset={present} onSuccess={onUploadImage}>
      {({ open }) => {
        return <button onClick={() => open()}>Upload an Image</button>;
      }}
    </CldUploadWidget>
  );
};
