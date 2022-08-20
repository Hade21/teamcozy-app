import React from "react";
import {
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineSend,
} from "react-icons/ai";

interface CaptionPostProps {
  name: string;
}
const CaptionPost: React.FC<CaptionPostProps> = ({ name }) => {
  return (
    <div className="px-3 py-2">
      <div className="actions flex gap-3 text-2xl">
        <AiOutlineHeart />
        <AiOutlineComment />
        <AiOutlineSend />
      </div>
      <div className="status mt-3">
        <p className="text-base font-bold">500 likes</p>
      </div>
      <div className="caption">
        <p className="text-base">
          <span className="font-bold">{name}</span> Dieng Culuture Festival XIII
          2022 "return of the light" 2-4 september 2022
        </p>
      </div>
      <div className="comments mt-2">
        <p className="text-base font-light text-slate-500">View 24 Comments</p>
      </div>
      <div className="posted mb-6">
        <p className="text-sm font-light text-slate-500">1 Day ago</p>
      </div>
    </div>
  );
};

export default CaptionPost;
