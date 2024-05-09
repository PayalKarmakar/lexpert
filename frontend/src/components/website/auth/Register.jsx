import React from "react";
import { splitErrors } from "../../../utils/showErrors";
import customFetch from "../../../utils/customFetch";
import { toast } from "react-toastify";

// export const action = ({ request }) => {
//   const formData = new request.formData();
//   const data = Object.fromEntries(formData);
//   console.log(data);
// };

const Register = ({ addSignIn }) => {
  const registerOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post("/auth/register", data); //routes
      toast.success(`Welcome to LExpert`);
      addSignIn();
    } catch (error) {
      splitErrors(error?.response?.data?.msg);
      return error;
    }
  };

  return (
    <div className="col align-items-center flex-col sign-up">
      <div className="form-wrapper align-items-center">
        <form onSubmit={registerOnSubmit}>
          <div className="form sign-up">
            <div className="input-group">
              <i className="bx bxs-select"></i>
              <select name="usertype">
                <option value="">Select User Type</option>
                <option value={`C`}>Consumer</option>
                <option value={`P`}>Provider</option>
              </select>
            </div>
            <div className="input-group">
              <i className="bx bx-mail-send"></i>
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="input-group">
              <i className="bx bx-mail-send"></i>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <i className="bx bx-mail-send"></i>
              <input type="text" name="mobile" placeholder="Mobile" />
            </div>
            <div className="input-group">
              <i className="bx bxs-user"></i>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="input-group">
              <i className="bx bxs-lock-alt"></i>
              <input type="password" name="password" placeholder="Password" />
            </div>

            <div className="input-group">
              <i className="bx bxs-lock-alt"></i>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
              />
            </div>
            <button type="submit">Sign up</button>
            <p>
              <span>Already have an account?</span>
              <b className="pointer" onClick={addSignIn}>
                Sign in here
              </b>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
