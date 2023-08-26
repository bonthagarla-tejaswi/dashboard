import {React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css"
export const Signup = () => {
  const nav = useNavigate();
  const [name,setName]=useState([]);
  const [email,setEmail]= useState([]);
  const [password, setPassword] = useState([]);
  const [number,setNumber]=useState([]);
  const [conpass,setConpass]=useState([]);
  const [dob,setDob]=useState([]);
  const [gender,setGender]=useState([]);
  const [user_id,setUser_id]=useState([]);
  const Submit=async(e) =>{
    e.preventDefault();
     try{
      if(password===conpass){
        const result = await axios.post("http://localhost:8000/signup/"+name+'/'+email+'/'+number+'/'+dob+'/'+password+'/'+gender+'/'+user_id.toLowerCase());
      console.log(result)
         if(result.data)
         {
          
             alert("Successfully signed up ");
             nav("/");
         }
         else{
             alert(" check your internet connection");
         }
      }
      else{
        alert("Password must be matched with confirm password");
      }
      
     }
     catch(e)
     {
      console.log(e);
      alert("User with this email already exists or check your email");
      nav("/");
     }
     
  }
  const [errorMessage, setErrorMessage] = useState("");
  function handlePassword(event) {
        
      const new_pass = event.target.value;
      setPassword(new_pass);
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
     
      else {
        setErrorMessage(""); 
      }

  }
        const[cperrormsg,setcperrormsg]=useState("")
        function handleConPassword(event) {
          const con_pass = event.target.value;
            setConpass(con_pass);
          if(password===con_pass){
            setcperrormsg("Password matched");
          }
          else{
            setcperrormsg("Password must be matched");
          }
        }
        const[numbererrormsg,setnumbererrormsg]=useState("")
        function handlenumber(e){
          const Phone_no=e.target.value;
          setNumber(Phone_no);
          if(Phone_no.length<10 ){
            setnumbererrormsg('Enter valid number');
          }
          else if(Phone_no.length>10){
            setnumbererrormsg('Phone number should be 10 digits only!');
          }
          else{
            setnumbererrormsg('');
          }
        }
        const[useriderrormsg,setuseriderrormsg]=useState("")
        function handleuserid(e){
          const userid=e.target.value;
          setUser_id(userid);
          if(userid.length<10){
            setuseriderrormsg('User id should have  ten characters.');
          }
          else if(userid.length>10){
            setuseriderrormsg('User Id can not exceed 10 character.')
          }
          else{
            setuseriderrormsg('');
          }
        }

  return (
    <>
    <div className="body html">
    <div className="container-signup">
    <div className="title">Registration</div>
    <div className="content">
      <form onSubmit={Submit} >
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required
              onChange={(e) => setName(e.target.value)} />
          </div>
          
          <div className="input-box">
            <span className="details">Email</span>
            <input type="email" placeholder="Enter your email" required
             onChange={(e) => setEmail(e.target.value)}  />
          </div>
          <div className="input-box">
            <span className="details">Registration Number</span>
            <input type="text" placeholder="Enter your Registration Number" required
             onChange={handleuserid}  />
          </div>
          <div className="passvalidation">{useriderrormsg}</div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required
             onChange={handlenumber}  />
          </div>
          <div className="passvalidation">{numbererrormsg}</div>
          <div className="input-box">
            <span className="details">Date of Birth</span>
            <input type="date"  required
             onChange={(e) => setDob(e.target.value)}   />
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" placeholder="Enter your password" required
              onChange={handlePassword}   />
          </div>
          <div className="passvalidation">{errorMessage}</div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required
             onChange={handleConPassword} />
          </div>
          <div className="passvalidation">{cperrormsg}</div>
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1" value="Male" onChange={(e) => setGender(e.target.value)} required/>
          <input type="radio" name="gender" id="dot-2" value="Female" onChange={(e) => setGender(e.target.value)} required/>
          <input type="radio" name="gender" id="dot-3" value="others" onChange={(e) => setGender(e.target.value)} required/>
          <span className="gender-title">Gender</span>
          <div className="category">
            <label htmlFor="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
          </label>
          <label htmlFor="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
          </label>
          <label htmlFor="dot-3">
            <span className="dot three"></span>
            <span className="gender">Prefer not to say</span>
            </label>
          </div>
        </div>
        <div >
        <button type="submit" className="button">REGISTER</button>
        </div>
        <div className="signup-link">
          Already have an account ? <a href="/">signin now</a>
        </div>
      </form>
    </div>
  </div>
  </div>
    </>
  );
};