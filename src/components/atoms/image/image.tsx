import React from "react";

interface ImageProps {
  src: string;
}
const Image: React.FC<ImageProps> = ({ src }) => {
  return (
    <div className="max-h-full max-w-xl overflow-hidden bg-slate-300">
      <img
        src={src}
        alt="post"
        className={`${src ? "h-fit" : "h-[576px]"} w-full`}
      />
    </div>
  );
};

export default Image;
