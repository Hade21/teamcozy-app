import React from "react";

interface IProps {
  image?: string;
  name: string | undefined;
}
const Avatar: React.FC<IProps> = ({ image, name }) => {
  return (
    <div className="flex w-full items-center justify-start gap-3 px-4 py-4">
      {image ? (
        <img src={image} alt="profile" className="h-10 w-10 rounded-full" />
      ) : (
        <div className="h-10 w-10 rounded-full bg-slate-400"></div>
      )}
      <p className="text-bold text-base">{name ? name : "Guest"}</p>
    </div>
  );
};

export default Avatar;
