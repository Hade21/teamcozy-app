import React from "react";
import { Post } from "../../molecules";
import { useGetPostsQuery } from "../../../services/post";

const Posts: React.FC = () => {
  const { error, data, isLoading } = useGetPostsQuery(undefined);
  console.log(data);

  return (
    <div className="flex flex-col gap-4">
      {data
        ? data.map((post) => {
            return (
              <Post
                name={post.creator}
                image=""
                caption={post.caption}
                key={post._id}
              />
            );
          })
        : null}
    </div>
  );
};

export default Posts;
