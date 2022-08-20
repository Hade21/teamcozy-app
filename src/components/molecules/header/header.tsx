import React from "react";
import {
  AiOutlinePlusSquare,
  AiFillHome,
  AiOutlineMessage,
  AiFillSetting,
} from "react-icons/ai";
import AddPost from "../addPost/addPost";

const Header: React.FC = () => {
  const [addPost, setAddPost] = React.useState(false);

  const handleAddPost = () => {
    setAddPost(!addPost);
  };

  return (
    <header className="sticky bg-white py-2 px-6 shadow-thick-line">
      <div className="container mx-auto flex justify-between lg:w-2/3">
        <div className="left">
          <h3>teamcozy</h3>
        </div>
        <div className="center">Search</div>
        <div className="right flex gap-6 text-2xl">
          <AiFillHome />
          <AiOutlineMessage />
          <AiOutlinePlusSquare onClick={handleAddPost} />
          <AiFillSetting />
        </div>
      </div>
      <div className="modals h-0 w-0">
        {addPost && <AddPost onClick={handleAddPost} />}
      </div>
    </header>
  );
};

export default Header;
