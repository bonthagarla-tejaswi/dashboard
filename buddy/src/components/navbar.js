import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import SearchBar from './searchbar';

function Navtop() {

  const [url,seturl]=useState("user.png")
 

 useEffect(() =>{
  if(localStorage.getItem("url")){
    seturl(localStorage.getItem("url"));
    document.getElementById("sidebar-menu").hidden=false;
    document.getElementById("signed-in1").hidden=true;
    document.getElementById("signed-in2").hidden=true;

  }
  else {
   

  }
 
 
 },[])  
  const logout = ()=>{
    localStorage.clear();
    window.location.reload();
  }
 
  return (
    <Navbar className="bg-body-tertiary navbar-fixed">
      <Container>
        <dir id="sidebar-menu" > <Sidebar /></dir>
       
    
        <Navbar.Brand ><div className='some-space'>buddy</div></Navbar.Brand>
        <div className='search-bar-in-navbar'>
          <SearchBar />
          </div>
        <Navbar.Toggle />
       
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          
          <div className="dropdown dropstart b-none">
            
                <button className="dropdown-toggle circle btn btn-primary" data-bs-toggle="dropdown" aria-expanded="false">
                     <a href="/profile" className='text-decoration-none profile-logo' ><img src={url} alt='user'/></a> 
                </button>
                <ul className="dropdown-menu">
                    <li><a href='/signup'><button className="dropdown-item" type="button" id="signed-in1" >sign up</button></a></li>
                    <li><a href='/login'><button className="dropdown-item" type="button" id="signed-in2" >sign in</button></a></li>
                    <li><a href='/profile'><button className="dropdown-item" type="button">profile</button></a></li>
                     <li><button className="dropdown-item btn btn-outline-danger" type="button" onClick={logout}>log out</button></li> 
                     
               </ul>
          </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navtop;