import React from "react";
import { FormUser } from "../../components";

const Register = () => {
  return (
    <div className="flex h-screen w-screen items-center">
      <div className="wrapper mx-auto w-1/2">
        <FormUser form="register" />
      </div>
    </div>
  );
};

export default Register;
