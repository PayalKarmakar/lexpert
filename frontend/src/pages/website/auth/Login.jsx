import React, { useEffect, useState } from "react";
import "./login.css";
import Register from "../../../components/website/auth/Register";
import SignIn from "../../../components/website/auth/SignIn";

const Login = () => {
  const [currentForm, setCurrentForm] = useState("sign-in");

  const addSignIn = () => {
    setCurrentForm("sign-in");
    container.classList.remove("sign-up");
    container.classList.add("sign-in");
  };

  const addSignUp = () => {
    setCurrentForm("sign-up");
    container.classList.remove("sign-in");
    container.classList.add("sign-up");
  };

  useEffect(() => {
    let container = document.getElementById("container");

    setTimeout(() => {
      container.classList.add(currentForm);
    }, 100);
  }, [currentForm]);

  return (
    <>
      <div
        id="container"
        className="reg-container"
        style={{ maxWidth: "100%" }}
      >
        {/* <!-- FORM SECTION --> */}
        <div className="reg-row">
          {/* <!-- SIGN UP --> */}
          <Register addSignIn={addSignIn} />
          {/* <!-- END SIGN UP --> */}

          {/* <!-- SIGN IN --> */}
          <SignIn addSignUp={addSignUp} />
          {/* <!-- END SIGN IN --> */}
        </div>
        {/* <!-- END FORM SECTION --> */}

        {/* <!-- CONTENT SECTION --> */}
        <div className="reg-row content-row">
          {/* <!-- SIGN IN CONTENT --> */}
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>Welcome</h2>
            </div>
            <div className="img sign-in"></div>
          </div>
          {/* <!-- END SIGN IN CONTENT --> */}
          {/* <!-- SIGN UP CONTENT --> */}
          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
          {/* <!-- END SIGN UP CONTENT --> */}
        </div>
        {/* <!-- END CONTENT SECTION --> */}
      </div>
    </>
  );
};

export default Login;
