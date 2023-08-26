import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./profiledata.css"
import CIcon from '@coreui/icons-react';
import { cilAccountLogout } from '@coreui/icons';

export default function Profile() {

  const nav = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      nav("/login");
    }
  
  })
  


  const [userData, setUserData] = useState({
    Name: " ",
    Father: " ",
    Mother: " ",
    User_id: " ",
    exp: " ",
    duration: " ",
    yes: " ",
    dsn: " ",
    Gender: " ",
    Dob : " ",
    othercourses: " ",
    experience: " ",
    Points : " ",
    Streak: " ",
    Mail_id: " ",
  });
  const logout = ()=>{
    localStorage.clear();
    nav('/login')
  }

  const getdata = async () => {
    try {
      const res = await axios.get('https://buddy-y2rk.onrender.com/full/' + localStorage.getItem("token"));
      setUserData(res.data);
      
    } catch (error) {
      console.error("Error getting data:", error);
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  const update = () => {
    nav('/updateprofiledetails');
  }
  // Example userData object
  const lastEarnedDateStr = new Date().toISOString().slice(0, 10); // Get current date string in YYYY-MM-DD format
  const lastEarnedDate = new Date(lastEarnedDateStr); // Convert to a Date object
  if (userData.Dob) {
    const dobParts = userData.Dob.split('-'); // Split the DOB string into [YYYY, MM, DD]
    const dob = new Date(dobParts[0], dobParts[1] - 1, dobParts[2]); // Subtract 1 from month
  
    var age = lastEarnedDate.getFullYear() - dob.getFullYear();
  
    if (
      lastEarnedDate.getMonth() < dob.getMonth() ||
      (lastEarnedDate.getMonth() === dob.getMonth() && lastEarnedDate.getDate() < dob.getDate())
    ) {
      age--;
    }
  
    
  } else {
    
  }
  
  


  return (
    <>
      <div className='container-fluid'>
        <h1 className='heading1 text-center text-success' >Profile Details</h1>
        <div class="d-flex justify-content-start"><button className='btn btn-primary' onClick={update}>update</button></div>
       
        <div class="d-flex justify-content-end">  <button className='btn btn-danger' onClick={logout}><CIcon icon={cilAccountLogout} className='anim-none'></CIcon> logout</button></div>
      
        <div>
        <div class="d-flex justify-content-center"><img alt='login' src={localStorage.getItem("url")}/></div>
          <i className='fs-6'>
            <div className='row'>
              <div className='col-sm-12 col-lg-6'>
              <h3>Name               : <span className="text-muted"> {userData.Name.toUpperCase()}</span></h3>
            <p className="h6 text-primary">Father                : <span className="text-muted"> {userData.Father}</span> </p>
            <p className="h6 text-primary">Mother                : <span className="text-muted"> {userData.Mother}</span> </p>
            <p className="h6 text-primary">Reg no                : <span className="text-muted"> {userData.User_id.toUpperCase()}</span> </p>
            <p className="h6 text-primary">Age                   : <span className="text-muted"> {age}</span> </p>
            <p className="h6 text-primary">Date of Birth         : <span className="text-muted"> {userData.Dob}</span> </p>
            <p className="h6 text-primary">Gender                : <span className="text-muted"> {userData.Gender}</span> </p>
            <p className="h6 text-primary">points                : <span className="text-muted"> {userData.Points}</span> </p>
            <p className="h6 text-primary">Streak                : <span className="text-muted"> {userData.Streak}</span> </p>
            <p className="h6 text-primary">Mail id               : <span className="text-muted"> {userData.Mail_id}</span> </p>

              </div>
              <div className='col-sm-12 col-lg-5'>
              <h2 className='text-success'>Experience    :</h2>
            <p className="h6 text-primary">yoga experience       : <span className="text-muted"> {userData.exp}</span> </p>
            <p className="h6 text-primary">Time Spent on Yoga    : <span className="text-muted"> {userData.duration}</span> </p>
            <p className="h6 text-primary">Done Yes+             : <span className="text-muted"> {userData.yes}</span> </p>
            <p className="h6 text-primary">Done DSN              : <span className="text-muted"> {userData.dsn}</span> </p>
            <p className="h6 text-primary">Done any other courses: <span className="text-muted"> {userData.othercourses}</span> </p>
            <p className="h6 text-primary">Shared Experience     : <span className="text-muted"> {userData.experience}</span> </p>

              </div>
              

            </div>
           
           
          </i>
        </div>
        <h5> few details are missing update </h5>
      
      </div>
    </>
  )
}