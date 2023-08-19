import { useEffect, useState } from "react"
import CIcon from '@coreui/icons-react';
import{cibSaucelabs, cibRust, cibLogstash,cilAccountLogout, cilLocationPin} from "@coreui/icons";
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
    const[location, setlocation] = useState("");

      const getDetails = async()=>{
       
         try{
          if(!localStorage.getItem("token")){
            nav("/login")
           }
        const name = localStorage.getItem('token');
        const res =await axios.get("http://localhost:8000/full/"+name);
        if(!res.data) {
        nav("/login");
        }
        else{
          setusername(res.data.Name);
          setEMAIL(res.data.mail_id);
          setuserid(res.data.user_id);
          setstreak(res.data.streak);
          setpoints(res.data.points);
          if(res.data.mail_id) {
            seturl("http://www.srkrexams.in/SRKR/photo/"+res.data.user_id+".jpg");
            localStorage.setItem('url', "http://www.srkrexams.in/SRKR/photo/"+res.data.user_id+".jpg");
          }
           
        }
      }catch(e) {
        nav("/login");
        alert("check your internet connection");

      }
    
    }

  useEffect(()=>{
    getDetails();
  },[]);
   
  const Logout = ()=>{
    localStorage.clear();
    alert('Logouted successfully');
    nav('/')
    document.getElementById("sidebar-menu").hidden=true;
   
  }
    return (
        <div className="smprofile">
               <center>
         <div className="welcmsg">hello <i>{username}!</i> </div>   
            <hr />
         
        
            <a href="/profile" className='text-decoration-none mprofile-logo profile-img'><img src={url} alt='user'/></a> 

           
            
            </center>
            
            <div className="profile-details">
            <p>USER ID      :{userid}</p>
                    <p>NAME         : {username}</p>
                    
                    <p title={EMAIL}>EMAIL        : {EMAIL}</p>
                    <p>streak       : {streak} <CIcon icon={cibRust}  className="icon" /></p>
                    <p>points       : {points} <CIcon icon={cibSaucelabs} className="icon" /></p>
                    <p>location      : <CIcon icon={cilLocationPin} className="anim-none" />{location} </p>


                    <p className="quote">today Quote  :{}</p>
                    <button onClick={Logout} className="btn btn-outline-danger"><CIcon icon={cilAccountLogout} className="anim-none"/>Logout</button>
                    
            </div>
           
        </div>
    )
}
 export {Mprofile} ;