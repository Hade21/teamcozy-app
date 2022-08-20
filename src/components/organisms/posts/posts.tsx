import React from "react";
import { Post } from "../../molecules";

const Posts: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <Post name="Ardito" image="" />
      <Post name="Dwi" image="" />
      <Post name="Jaka" image="" />
      <Post name="Nita" image="" />
      <Post name="Joni" image="" />
    </div>
  );
};

export default Posts;
