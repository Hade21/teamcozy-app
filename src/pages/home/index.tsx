import React from "react";
import { Header, Posts } from "../../components";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="body mx-auto w-2/3">
        <div className="post-wrapper w-4/6 p-2">
          <Posts />
        </div>
      </div>
    </>
  );
};

export default Home;
