import React from "react";
import { FormUser } from "../../components";

const Login = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="wrapper w-1/2">
        <FormUser form="login" />
      </div>
    </div>
  );
};

export default Login;
