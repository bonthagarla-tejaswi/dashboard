import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signin.css"
export const Signin = () => {
  const nav = useNavigate();
 useEffect(()=>{
  if(localStorage.getItem("token")){
    nav('/');
 } 
 })
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const result = await axios.get("http://localhost:8000/signin/"+email+'/'+password);
        
      if (result.data) {
        alert("Successfully logged in");
        nav("/"); // Navigate to the "User" page
        localStorage.setItem("token",result.data.Mail_id)
      } else {
        alert("USER NOT FOUND");
        // nav("/signup"); // Navigate to the "signup" page
      }
    } catch (e) {
      console.log(e);
      alert("check your network connection");
    }
  };
  const PassCheck = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  return (
    <> <div className="body html">
      <div className="wrapper">
        <div className="title">Log in</div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" onClick={PassCheck} />
              <label htmlFor="remember-me">Show Password</label>
            </div>
            <div className="pass-link">
              <a href="/updatepass">Forgot password?</a>
            </div>
          </div>
          <div className="field">
            <button  className="button" type="submit">Login</button>
          </div>
          <div className="signup-link">
            Not a member? <a href="/signup">Signup now</a>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};
