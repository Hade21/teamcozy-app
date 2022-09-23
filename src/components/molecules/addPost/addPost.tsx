import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AddPhoto, Button, Input } from "../../atoms";

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
      <AddPhoto />
    </div>
  );
};

export default AddPost;
