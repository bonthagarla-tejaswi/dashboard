import {React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signin.css"

export const Updatepass = () => {
   const [email,Setemail]=useState([]);
    const [newpassword,Setnewpassword]=useState([]);
    const [dob,Setdob]=useState([]);
    const nav =useNavigate();
 
    const Submit = async (e) => {
      e.preventDefault();
        try {
          const res = await axios.post("http://localhost:8000/updatepass/"+email+"/"+dob+"/"+newpassword);
          if (res.data) {
            alert("Successfully updated ");
            nav("/");
          } else {
            alert("Sorry, try again");
          }
        } catch (e) {
          console.log(e);
          alert("Invalid email or date of birth");
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
       const [errorMessage, setErrorMessage] = useState("");
       function handlePassword(event) {
             
           const new_pass = event.target.value;
           Setnewpassword(new_pass);
           var lowerCase = /[a-z]/g;
           var upperCase = /[A-Z]/g;
           var numbers = /[0-9]/g;
           if (!new_pass.match(upperCase)) {
             setErrorMessage("Password should contains uppercase letters!");
           } 
           else if (!new_pass.match(lowerCase)) {
             setErrorMessage("Password should contain lowercase letters!");
           } 
           else if (!new_pass.match(numbers)) {
             setErrorMessage("Password should contains numbers also!");
           } 
           else if (new_pass.length<6) {
             setErrorMessage("Password length should be more than 6.");
           } 
           else if(new_pass.length>=9){
             setErrorMessage("Password length should be less than or equal to 8.");
           }
           else {
             setErrorMessage(""); 
           }

       }
  return (
    <>
    <div className="body html">
    <div className="wrapper">
         <div className="title">
            Password Update
         </div>
         <form onSubmit={Submit}>
            <div className="field">
               <input type="email" required onChange={(e) => Setemail(e.target.value)}/>
               <label>Email Address</label>
            </div>
            <div className="field">
               <input type="date" required onChange={(e) => Setdob(e.target.value)}/>
               <label>Date of Birth</label>
            </div>
            <div className="field">
               <input type="password" id="password"required  onChange={handlePassword}/>
               <label>New Password</label>
            </div>
            <div className="passvalidation">{errorMessage}</div>
          
            <div className="content">
               <div className="checkbox">
                  <input type="checkbox" id="remember-me" onClick={PassCheck}/>
                  <label >Show Password</label>
               </div>
               <div className="pass-link">
                  <a href="/">SignIn page?</a>
               </div>
            </div>
            <div className="field">
               <button type="submit" value="Update" className="button"> Update</button>
            </div>
         </form>
      </div>
      </div>
    </>
  );
};