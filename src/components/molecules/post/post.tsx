import React from "react";
import { Avatar, Image, CaptionPost } from "../../atoms";

interface PostProps {
  name: string | undefined;
  image: string;
  caption?: string;
}
const Post: React.FC<PostProps> = ({ name, image, caption }) => {
  return (
    <div className="rounded-md border border-slate-300">
      <Avatar name={name} />
      <Image src={image} />
      <CaptionPost name={name} caption={caption} />
    </div>
  );
};

export default Post;
