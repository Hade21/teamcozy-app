import React, { useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import Button from "../button/button";

const AddPhoto: React.FC = () => {
  const [base64, setBase64] = useState("");

  const convertImageToBase64 = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const onImageUpload = async (e: React.FormEvent<HTMLInputElement>) => {
    let uploaded = e.currentTarget.files;
    const base64 = await convertImageToBase64(uploaded?.item(0) as Blob);
    setBase64(base64 as string);
    console.log(base64);
  };

  return (
    <div className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-slate-900 bg-opacity-70">
      <form className="frame flex h-fit w-1/2 flex-col items-center justify-center gap-4 rounded-md bg-white p-8">
        {!base64 && <h1 className="text-3xl font-semibold">Add Photo</h1>}
        <div
          className={`add cursor-pointer ${base64 ? "text-3xl" : "text-6xl"}`}
        >
          <label htmlFor="image">
            <BsPlusSquare />
          </label>
          <input
            type="file"
            name="image"
            id="image"
            multiple={false}
            accept="image/*"
            onChange={onImageUpload}
            className="hidden"
          />
        </div>
        {base64 && (
          <img
            src={base64}
            alt="preview"
            className="preview max-w-96 max-h-96 rounded-md object-contain object-center"
          />
        )}
        {base64 && (
          <Button model="rounded" type="button">
            Next
          </Button>
        )}
      </form>
    </div>
  );
};

export default AddPhoto;
