import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailDirty(true);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
    setPasswordDirty(true);
  };
  const handlemoveToSign = () => {
    setEmailDirty(true);
    setPasswordDirty(true);
    setEmail('')
    setPassword('')
  };
  return (
    <div className="container">
      <div className="loginbox">
        <h1>Signin</h1>
        <p>Email</p>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            handleEmail(e);
          }}
          placeholder="Enter the Email"
        />
        {emailDirty && !email.length && <span className="span-color">Email is Required</span>}
        {!email.includes('@')&& email.length>0 &&(<span className="span-color">Email is invalid</span>)}
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            handlePass(e);
          }}
          placeholder="Enter the password"
        />
        {passwordDirty && !password.length && <span className="span-color">Password is Required</span>}
        {!password.length <10 && password.length>0 ? (<span className="span-color">Password must be 10 characters</span>):null}
        <div className="Submit" onClick={handlemoveToSign}> 
       Submit
       </div>
        <p
          onClick={() => {
            navigate("/signup");
          }}
          style={{ cursor: "pointer" }}
        >
          If you haven't an account  <span style={{fontSize:'25px', color:"blue"}}> SignUp </span>  here
        </p>
      </div>
    </div>
  );
};

export default Signin;
