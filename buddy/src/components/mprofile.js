import { useEffect, useState } from "react"
import CIcon from '@coreui/icons-react';
import{cibSaucelabs, cibRust,cilAccountLogout, cilLocationPin} from "@coreui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

 function Mprofile(){
  const nav = useNavigate()
  
    const [username, setusername] = useState("");
    const [EMAIL, setEMAIL] = useState("");
    const [userid, setuserid] = useState("");
    const [streak, setstreak] = useState(0);
    const[points, setpoints] = useState(0);
    const[url, seturl] = useState("user.png");

      const getDetails = async()=>{
       
         try{
          if(!localStorage.getItem("token")){
            nav("/login")
           }
        const name = localStorage.getItem('token');
        const res =await axios.get("https://buddy-y2rk.onrender.com/full/"+name);
        if(!res.data) {
        nav("/login");
        }
        else{
          setusername(res.data.Name);
          setEMAIL(res.data.Mail_id);
          setuserid(res.data.User_id);
          setstreak(res.data.Streak);
          setpoints(res.data.Points);
          if(res.data.Mail_id) {
            seturl("http://www.srkrexams.in/SRKR/photo/"+res.data.User_id+".jpg");
            localStorage.setItem('url', "http://www.srkrexams.in/SRKR/photo/"+res.data.User_id+".jpg");
          }
           
        }
      }catch(e) {
        nav("/login");
        alert("check your internet connection");

      }
    
    }

  useEffect(()=>{
    getDetails();
  });
  const Logout = ()=>{
    localStorage.clear();
    alert('Logouted successfully');
    nav('/')
    document.getElementById("sidebar-menu").hidden=true;
   
  }
    return (
        <div className="smprofile">
               <center>
         <div className="welcmsg">hello <i color="#0039e6">{username}!</i> </div>   
            <hr />
            <a href="/profile" className='text-decoration-none mprofile-logo profile-img'><img src={url} alt='user'/></a> 
            </center>
            
            <div className="profile-details">
            <p>User id     :{userid}</p>
                    <p>Name         : {username}</p>
                    
                    <p title={EMAIL}>Email       : {EMAIL}</p>
                    <p>Streak       : {streak} <CIcon icon={cibRust}  className="icon" /></p>
                    <p>Points       : {points} <CIcon icon={cibSaucelabs} className="icon" /></p>
                    <p>Location      : <CIcon icon={cilLocationPin} className="anim-none" /></p>
                    <p className="quote">today Quote  :</p>
                    <button onClick={Logout} className="btn btn-outline-danger"><CIcon icon={cilAccountLogout} className="anim-none"/>Logout</button>
                    
            </div>
           
        </div>
    )
}
 export {Mprofile} ;