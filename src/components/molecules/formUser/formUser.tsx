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

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
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
      navigate("/");
    }
  };

  return (
    <div className="rounded-md border border-slate-500 py-12">
      <h2 className="text-center text-3xl font-semibold">TeamCozy</h2>
      <div className="wrapper mx-auto mt-12 w-5/6">
        <form
          className="flex flex-col items-center justify-center gap-y-4"
          onSubmit={handleSubmit}
        >
          {form === "register" ? (
            <div className="wrapper">
              <div className="fullname">
                <Input
                  id="fullname"
                  placeholder="Fullname"
                  value={fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="email">
                <Input
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>
          ) : null}
          <div className="username">
            <Input
              id="username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <Input
              id="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
          </div>
          {form === "register" && (
            <div className="confirmPassword">
              <Input
                id="confirmPassword"
                placeholder="Confirm Password"
                value={cpassword}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="submit">
            <Button model="rounded" type="submit">
              {form === "login" ? "Login" : "Register"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormUser;
