import { useEffect, useState } from "react"
import CIcon from '@coreui/icons-react';
import{cibSaucelabs, cibRust, cibLogstash,cilAccountLogout} from "@coreui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

 function Mprofile(){
  const nav = useNavigate()
  
    const [username, setusername] = useState("");
    const [EMAIL, setEMAIL] = useState("");
    const [userid, setuserid] = useState("");
    const [streak, setstreak] = useState(0);
    const[points, setpoints] = useState(0);
    const[url, seturl] = useState("");

      const getDetails = async()=>{
        if(!localStorage.getItem("token")){
          nav("/login")
         }
        const name = localStorage.getItem('token');
        const res =await axios.get("http://localhost:8000/full/"+name);
        if(!res.data) {
        nav("/signin");

        }
        else{
          setusername(res.data.Name);
          setEMAIL(res.data.mail_id);
          setuserid(res.data.user_id);
          setstreak(res.data.streak);
          setpoints(res.data.points);
          seturl(res.data.url);
           
        }
      }
  useEffect(()=>{
    getDetails();
  },[]);
   
  const Logout = ()=>{
    localStorage.clear();
    alert('Logouted successfully');
   
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
                    
                    <p>EMAIL        : {EMAIL}</p>
                    <p>streak       : {streak} <CIcon icon={cibRust}  className="icon" /></p>
                    <p>points       : {points} <CIcon icon={cibSaucelabs} className="icon" /></p>
                    <p className="quote">today Quote  :{}</p>
                    <button onClick={Logout} className="btn btn-outline-danger"><CIcon icon={cilAccountLogout}/>Logout</button>
                    
            </div>
           
        </div>
    )
}
 export {Mprofile} ;