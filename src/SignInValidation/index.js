import React, { useState } from "react";
import "./style.css";

function SignInValidation() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const[checkBox, setCheckBox] = useState(false);

  const [successMsg, setSuccessMsg] = useState("");

  const onEmailChange = (e) => {
    setSuccessMsg("");
    setEmailError("");
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setSuccessMsg("");
    setPasswordError("");
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (email !== "") {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (emailRegex.test(email)) {
        setEmailError("");
        if (email === "muhammadmairaj@gmail.com") {
          setEmailError("");
          if (password === "Mairaj12345") {
            setSuccessMsg("You are Successfully Login");
          } else {
            setPasswordError("Password doesn't match with email address");
          }
        } else {
          setEmailError("Email Address doesn't match our database");
        }
      } else {
        setEmailError("Invalid Email");
     }
    } else {
      setEmailError("Email Required");
    }

    if (password !== "") {
      setPasswordError("");
    } else {
      setPasswordError("Password Required");
    }

    console.log(e.target[2].value);
  };

  return (
    <div className="text-center mt-5">
      <h1>
        React Login Form Validation using useState Hook & Conditional Rendering
      </h1>
      <form
        style={{ maxWidth: "300px", margin: "auto" }}
        onSubmit={onSubmitHandler}
      >
        <img
          src="https://o.remove.bg/downloads/03d47410-e79c-4e0a-8cd2-3734dca158f2/images-removebg-preview.png"
          className="mt-4 mb-4"
          alt="LoginIcon"
        />
        <h1 className="h3 mb-3 font-weight-normal">Please sign In</h1>
        {successMsg && <>
            <div className="success-msg">{successMsg}</div>
        </>}
        <label htmlFor="forEmailAddress" className="sr-only">
          {/* Email Address */}
        </label>
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={onEmailChange}
          placeholder="Enter Email"
        />
        {emailError && <div className="error-msg">{emailError}</div>}
        <label htmlFor="forPassword" className="sr-only">
          {/* Password */}
        </label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={onPasswordChange}
          placeholder="Enter Password"
        />
        {passwordError && <div className="error-msg">{passwordError}</div>}
        <div className="checkbox mt-3">
          <label>
            <input type="checkbox" checkBox={checkBox}
            onChange={(e) => setCheckBox(e.target.checked)} />
            Remember me
          </label>
        </div>
        <div className="mt-3">
          <button className="btn btn-lg btn-primary btn-block">SignIn</button>
        </div>
      </form>
    </div>
  );
}

export default SignInValidation;
