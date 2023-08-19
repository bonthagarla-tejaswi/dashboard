import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Fun =()=>{
    const [name,setName]=useState();
    const nav=useNavigate();
    const  Log = async()=>{
       
        const res =await axios.get("http://localhost:8000/full/"+name);
        if(res.data){
        localStorage.setItem('token',res.data.mail_id)
        
        nav('/');
        }
       

       
    }
    return (
        <>
        <label> <b>Gmail:: </b><input type="mail" placeholder="enter gmail" onChange={(e)=>setName(e.target.value)}></input></label><br/><br/>
        
        <button className="bt" onClick={Log}><h6>login</h6></button>
        </>
    )
}
export default Fun;