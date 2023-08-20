import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Fun =()=>{
    const [name,setName]=useState();
    const nav=useNavigate();
    const Log=()=>{
        localStorage.setItem('token',name)
        nav('/');
    }
    return (
        <>
        <label> <b>Gmail:: </b><input type="email" placeholder="enter gmail" onChange={(e)=>setName(e.target.value)}></input></label><br/><br/>
        
        <button className="bt" onClick={Log}><h6>login</h6></button>
        </>
    )
}
export default Fun;