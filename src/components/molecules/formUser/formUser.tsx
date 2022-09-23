import React from "react";
import { Button, Input } from "../../atoms";
import { useSelector, useDispatch } from "react-redux";
import {
  setCPassword,
  setEmail,
  setFullname,
  setPassword,
  setUsername,
} from "../../../features/userSlice/userSlice";
import { RootState } from "../../../app/store";
import { useLoginMutation, useRegisterMutation } from "../../../services/user";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

interface IFormUser {
  form: "login" | "register";
}
const FormUser: React.FC<IFormUser> = ({ form }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fullname = useSelector((state: RootState) => state.user.fullname);
  const username = useSelector((state: RootState) => state.user.username);
  const email = useSelector((state: RootState) => state.user.email);
  const password = useSelector((state: RootState) => state.user.password);
  const cpassword = useSelector((state: RootState) => state.user.c_password);
  const gender = useSelector((state: RootState) => state.user.gender);
  const dateofbirth = useSelector((state: RootState) => state.user.dateofbirth);
  const phone = useSelector((state: RootState) => state.user.phone);

  const [cookies, setCookie] = useCookies(["token"]);
  const [
    login,
    { isLoading: loginLoad, isError: loginError, data: loginData },
  ] = useLoginMutation();
  const [
    register,
    { isLoading: registerLoad, isError: registerError, data: registerData },
  ] = useRegisterMutation();

  const handleDisabled = (): boolean => {
    if (form === "login") {
      if (username && password) {
        return false;
      } else {
        return true;
      }
    } else {
      if (fullname && username && email && password && cpassword) {
        return false;
      } else {
        return true;
      }
    }
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.id === "fullname") {
      dispatch(setFullname(e.currentTarget.value));
    } else if (e.currentTarget.id === "username") {
      dispatch(setUsername(e.currentTarget.value));
    } else if (e.currentTarget.id === "email") {
      dispatch(setEmail(e.currentTarget.value));
    } else if (e.currentTarget.id === "password") {
      dispatch(setPassword(e.currentTarget.value));
    } else if (e.currentTarget.id === "confirmPassword") {
      dispatch(setCPassword(e.currentTarget.value));
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form === "login") {
      const body = {
        username,
        password,
      };
      await login(body);
      setCookie("token", loginData?.token);
      console.log(loginError, loginData);
      if (!loginError) {
        navigate("/");
      }
    } else {
      const body = {
        username,
        email,
        fullname,
        password,
        dateofbirth,
        gender,
        phone,
      };
      await register(body);
      console.log(registerError);
      if (!registerError) {
        navigate("/login");
      }
    }
  };

  return (
    <div className="w-full rounded-md border border-slate-500 py-12">
      <h2 className="text-center text-3xl font-semibold">TeamCozy</h2>
      <div className="wrapper mx-auto mt-12 w-full">
        <form
          className="mx-auto flex w-5/6 flex-col items-center justify-center gap-y-4"
          onSubmit={handleSubmit}
        >
          {form === "register" ? (
            <div className="wrapper flex w-full flex-col gap-y-4">
              <div className="fullname">
                <Input
                  id="fullname"
                  type="text"
                  placeholder="Fullname"
                  value={fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="email">
                <Input
                  id="email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>
          ) : null}
          <div className="username w-full">
            <Input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="password w-full">
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
          </div>
          {form === "register" && (
            <div className="confirmPassword w-full">
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={cpassword}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="submit">
            <Button model="rounded" type="submit" disabled={handleDisabled()}>
              {form === "login" ? "Login" : "Register"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormUser;
