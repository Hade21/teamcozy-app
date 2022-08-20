import React from "react";
import { Avatar, Image, CaptionPost } from "../../atoms";

interface PostProps {
  name: string;
  image: string;
}
const Post: React.FC<PostProps> = ({ name, image }) => {
  return (
    <div className="rounded-md border border-slate-300">
      <Avatar name={name} />
      <Image src={image} />
      <CaptionPost name={name} />
    </div>
  );
};

export default Post;
