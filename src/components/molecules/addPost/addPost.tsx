import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Button, Input } from "../../atoms";

interface AddPostProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
const AddPost: React.FC<AddPostProps> = ({ onClick }) => {
  const [creator, setCreator] = useState("");
  const [caption, setCaption] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "creator") {
      setCreator(value);
    } else {
      setCaption(value);
    }
  };
  return (
    <div className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-slate-900 bg-opacity-70">
      <div className="wrapper relative h-fit w-1/2 rounded-md bg-white py-12">
        <form className="mx-auto flex w-5/6 flex-col justify-center gap-4">
          <div className="form-group grid gap-2">
            <Input
              id="creator"
              placeholder="Creator"
              value={creator}
              onChange={handleChange}
            />
            <Input
              id="caption"
              placeholder="Caption"
              value={caption}
              onChange={handleChange}
            />
          </div>
          <div className="form-group w-full text-center">
            <Button model="circle" type="submit">
              Save
            </Button>
          </div>
        </form>
        <div
          className="close absolute top-4 right-4 cursor-pointer text-2xl"
          onClick={onClick}
        >
          <AiOutlineCloseCircle />
        </div>
      </div>
    </div>
  );
};

export default AddPost;
