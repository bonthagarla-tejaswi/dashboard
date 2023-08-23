import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./profiledata.css"

export default function Profile() {
  const nav = useNavigate();

  if (localStorage.getItem("token") == null) {
    nav("/login");
  }

  const [userData, setUserData] = useState({
    Name: "",
    Father: "",
    Mother: "",
    User_id: "",
    exp: "",
    duration: "",
    yes: "",
    dsn: "",
    othercourses: "",
    experience: ""
  });

  const getdata = async () => {
    try {
      const res = await axios.get('http://localhost:8000/full/' + localStorage.getItem("token"));
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

  return (
    <>
      <div className='container-fluid'>
        <h1 className='heading1' >Profile Details</h1>
        
        <div className='details container'>
          <pre className='fs-6'>
            <h3>Name                : {userData.Name}</h3>
            <h4>Father                : {userData.Father}</h4>
            <h4>Mother                : {userData.Mother}</h4>
            <h4>Reg no                : {userData.User_id}</h4>
            <h1>Experience    :</h1>
            <h4>yoga experience       : {userData.exp}</h4>
            <h4>Time Spent on Yoga    : {userData.duration}</h4>
            <h4>Done Yes+             : {userData.yes}</h4>
            <h4>Done DSN              : {userData.dsn}</h4>
            <h4>Done any other courses: {userData.othercourses}</h4>
            <h4>Shared Experience     : {userData.experience}</h4>
          </pre>
        </div>
        <h1> few details are missing update </h1>
        <button style={{ background: 'lightgreen' }} className='update' onClick={update}>update</button>
      </div>
    </>
  )
}
