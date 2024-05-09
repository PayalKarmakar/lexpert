import React from "react";
import { splitErrors } from "../../../utils/showErrors";
import customFetch from "../../../utils/customFetch";

const SignIn = ({ addSignUp }) => {
  const loginOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginData = Object.fromEntries(formData);
    try {
      await customFetch.post("/auth/login", loginData); //routes
    } catch (error) {}
    // console.log(loginData);
    // try {
    //   await customFetch.post("/auth/register", data); //routes
    //   toast.success(`Welcome to LExpert`);
    //   addSignIn();
    // } catch (error) {
    //   splitErrors(error?.response?.data?.msg);
    //   return error;
    // }
  };

  return (
    <div className="col align-items-center flex-col sign-in">
      <div className="form-wrapper align-items-center">
        <form onSubmit={loginOnSubmit}>
          <div className="form sign-in">
            <div className="input-group">
              <i className="bx bxs-user"></i>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="input-group">
              <i className="bx bxs-lock-alt"></i>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <button type="submit">Sign in</button>
            <p>
              <b>Forgot password?</b>
            </p>
            <p>
              <span>Don't have an account?</span>
              <b className="pointer" onClick={addSignUp}>
                Sign up here
              </b>
            </p>
          </div>
        </form>
      </div>
      <div className="form-wrapper"></div>
    </div>
  );
};

export default SignIn;
