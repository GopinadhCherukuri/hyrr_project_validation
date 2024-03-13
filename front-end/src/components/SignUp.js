import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const SignUp = () => {
  const [name, setName] = useState("");
  const [emaill, setEmaill] = useState("");
  const [passwordd, setPasswordd] = useState("");
  const [againpassword, setAgainpassword] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passworddDirty, setPasswordDirty] = useState(false);
  const [againpasswordDirty, setAgainpasswordDirty] = useState(false);
  const[check, setCheck]=useState(false)
  const navigate = useNavigate();

  const hadleName = (e) => {
    setName(e.target.value);
    setNameDirty(true);
  };
  const handleEmail = (e) => {
    setEmaill(e.target.value);
    setEmailDirty(true);
  };
  const hadlePass = (e) => {
    setPasswordd(e.target.value);
    setPasswordDirty(true);
  };
  const hadlePass1 = (e) => {
    setAgainpassword(e.target.value);
    setAgainpasswordDirty(true);
  };
  const handleMoveTo = () => {
    if (check && name && passwordd&&emaill&&againpassword){
        console.log("else  block executed in handle move");
        setNameDirty(true);
        setEmailDirty(true);
        setPasswordDirty(true);
        setAgainpasswordDirty(true);
        console.log("hii")
      axios.post('http://localhost:8080/signup',
        {
            name,
           email: emaill,
            password:passwordd,
            confirmpassword:againpassword
        }).then((res)=> console.log(res)).catch(err=>console.log(err))
        setName('')
        setEmaill('')
        setPasswordd('')
        setAgainpassword('')
        navigate('/pagination')
    }else{
        console.log("Please provide all fields");
        
    
    
    }

    
  };

  return (
    <div className="container">
      <div className="loginbox">
        <h1>SignUp</h1>
        <p>Name:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            hadleName(e);
          }}
          placeholder="Enter the name"
        />
        {nameDirty && !name.length && <span className="span-color">Name is Required</span>}
        <p>Email:</p>
        <input
          type="email"
          value={emaill}
          onChange={(e) => {
            handleEmail(e);
          }}
          placeholder="Enter the Email"
        />
        {emailDirty && !emaill.length && <span className="span-color">Email is Required</span>}
        {!emaill.includes("@")&& emaill.length>0 && <span className="span-color">Email is invalid</span>}
        {}
        <p>Password:</p>
        <input
          type="password"
          value={passwordd}
          onChange={(e) => {
            hadlePass(e);
          }}
          placeholder="Enter the password"
        />
        {passworddDirty && !passwordd.length && (

          <span className="span-color">Password is Required</span>
        )}
         {passwordd.length <10 && passwordd.length>0 ? (<span className="span-color">Password must be 10 characters</span>):null}
        <p>Confirm Password:</p>
        <input
          type="password"
          value={againpassword}
          onChange={(e) => {
            hadlePass1(e);
          }}
          placeholder="Enter the password again"
        />
        {againpasswordDirty && !againpassword.length && (
          <span className="span-color">Confirm password is Required</span>
        ) || passwordd !== againpassword &&(<span className="span-color">Confirm password & password should match</span>)}
        
          <input type="checkbox" value={check} onClick={()=>setCheck(!check)} />
          Terms & Conditions
          {check!==true  && <span className="span-color">must be fill the box</span>}
       <div className="Submit" onClick={handleMoveTo} > 
       Submit
       </div>
      </div>
    </div>
  );
};

export default SignUp;
