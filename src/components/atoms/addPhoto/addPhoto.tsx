import React from "react";
import { BsPlusSquare } from "react-icons/bs";

const AddPhoto = () => {
  return (
    <div className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-slate-900 bg-opacity-70">
      <div className="frame flex h-fit w-1/2 flex-col items-center justify-center gap-4 rounded-md bg-white py-8">
        <h1 className="text-3xl font-semibold">Add Photo</h1>
        <div className="add cursor-pointer text-6xl">
          <BsPlusSquare />
        </div>
      </div>
    </div>
  );
};

export default AddPhoto;
