import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import Sidebar from './sidebar';

function Navtop() {

  const [url,seturl]=useState("user.png")
  const [btn1,setbtn1]=useState("profile")
  const [btn2,setbtn2]=useState("logout")
  const [btn2url,setbtn2url]=useState("logout")

 useEffect(() =>{
  if(localStorage.getItem("url")){
    seturl(localStorage.getItem("url"));
    
  }
  else {
    setbtn1("login");
    setbtn2("signup");
    setbtn2url("/signup");

  }
  if(!localStorage.getItem("token")){
    document.getElementById("sidebar-menu").hidden=true;

  }
 
 },[])  
  const logout = ()=>{
    localStorage.clear();
    window.location.reload();
  }
 
  return (
    <Navbar className="bg-body-tertiary navbar-fixed">
      <Container>
        <dir id="sidebar-menu"> <Sidebar /></dir>
    
        <Navbar.Brand href="/"><div className='some-space'>buddy</div></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          
          <div class="dropdown dropstart b-none">
                <button class="dropdown-toggle circle" data-bs-toggle="dropdown" aria-expanded="false">
                     <a href="/profile" className='text-decoration-none profile-logo' ><img src={url} /></a> 
                </button>
                <ul class="dropdown-menu">
                    <li><a href='/profile'><button class="dropdown-item" type="button">{btn1}</button></a></li>
                     <li><button class="dropdown-item btn btn-outline-danger" type="button" onClick={logout}>{btn2}</button></li> 
               </ul>
          </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navtop;