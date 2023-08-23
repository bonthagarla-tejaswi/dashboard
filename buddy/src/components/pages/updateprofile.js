import { useState } from 'react';
import axios from 'axios';
import "./profiledata.css"
import { useNavigate } from 'react-router-dom';
export const Details = () => {
    
    const nav = useNavigate();
     if (localStorage.getItem("token") == null) {
        nav("/");
      }
    const [username, Setusername] = useState();
    const [father, Setfather] = useState();
    const [mother, Setmother] = useState();
    const [reg, Setreg] = useState();
    const [exp, Setexp] = useState();
    const [duration, setduration] = useState();
    const [yes, setyes] = useState();
    const [dsn, setdsn] = useState();
    const [othercourses, setothercourses] = useState();
    const [experience, setexperience] = useState();

    const back = () => {
        nav('/profile')
    }
    const Submit = async () => {
        const responce = await axios.post("http://localhost:8000/Profile/" + username + "/" + father + "/" + mother + "/" + reg + "/" + exp + "/" + duration + "/" + yes + "/" + dsn + "/" + othercourses + "/" + experience);
        console.log(responce.data);
        if (responce.data) {
            alert("data inserted successfully");
        }
    }

    return (
        <>
            <div className="body-profile container-fluid">

                <h1 className="heading">PROFILE INFORMATION</h1>

                <br />
                <label className='labels'>User Name</label>
                <input className='textfields' type='text' name='username' onChange={(e) => Setusername(e.target.value)} />
                <br />
                <label className='labels'>Father Name</label  >
                <input className='textfields' type='text' name='father' onChange={(e) => Setfather(e.target.value)} />
                <br />
                <label className='labels'> Mother Name</label>
                <input className='textfields' type='text' name='mother' onChange={(e) => Setmother(e.target.value)} />
                <br />
                <label className='labels'>registration no</label>
                <input className='textfields' type='text' name='reg' onChange={(e) => Setreg(e.target.value)} />
                <br />
                <br />


                <div className="heading"><h1> EXPERIENCE </h1></div>
                <div className='container-fluid'>
                    <label className='body1'>Yoga/Meditation Experience : </label>
                    <input type="text" name="exp" onChange={(e) => Setexp(e.target.value)}></input><br />
                    <label className='body1'>Time Spent on Yoga : </label>
                    <input type="text" className='timespent' name="duration" onChange={(e) => setduration(e.target.value)}></input><br />
                    <label className='body1'>Did You Complete YES+ : </label>
                    <br />
                    <input type="radio" className="radio" name="yes" value='Yes' onChange={(e) => setyes(e.target.value)}></input><label>YES </label>
                    <input type="radio" name="yes" value='No' onChange={(e) => setyes(e.target.value)}></input><label>NO</label><br />
                    <label className='body1'>Did You Complete DSN Course :  </label>
                    <br />
                    <input type="radio" className="radio" value='Yes' name="dsn" onChange={(e) => setdsn(e.target.value)}></input>
                    <label>YES </label>
                    <input type="radio" name="dsn" value='No' onChange={(e) => setdsn(e.target.value)}></input>
                    <label>NO</label><br />
                    <label className='body1'>Any Other Courses : </label>
                    <br />
                    <input type="text" className="experience" name="anyothercourses" onChange={(e) => setothercourses(e.target.value)}></input>
                    <br />
                    <label className='body1'>Experience Sharing: </label>
                    <br />
                    <input type="text" className="experience" name="experience" onChange={(e) => setexperience(e.target.value)}></input><br />
                </div>


                <button className="btn btn-outline-danger back" onClick={back}>Back</button>
                <button className='btn btn-outline-success' onClick={Submit}>update</button>
            </div>
        </>
    )
}