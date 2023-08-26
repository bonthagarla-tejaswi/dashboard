import { useEffect, useState } from 'react';
import axios from 'axios';
import "./profiledata.css"
import { useNavigate } from 'react-router-dom';
export const Details = () => {
    
    const nav = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("token")==null){
          nav('/');
       } 
       })
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
        const responce = await axios.post("https://buddy-y2rk.onrender.com/Profile/" + username + "/" + father + "/" + mother + "/" + reg + "/" + exp + "/" + duration + "/" + yes + "/" + dsn + "/" + othercourses + "/" + experience);
        console.log(responce.data);
        if (responce.data) {
            alert("data inserted successfully");
        }
    }

    return (
        <>
            <div className="body-profile container-fluid">
                <div className="text-center bg-warning p-4">
                    <h1 className='text-primary'>UPADTE PROFILE DETAILS</h1>
                </div>
             <div className="row text-left p-3 m-3">
                <div className="col-lg-6 ">

                
                <h1 className="heading">PROFILE INFORMATION</h1>

                <br />   
                <div className="p-3">

                
           
                <label className='labels'>User Name</label>
                <input className='textfields m-1' type='text' name='username' onChange={(e) => Setusername(e.target.value)} />
                <br />
                </div>
                <div className="p-3">
                <label className='labels'>Father Name</label  >
                <input className='textfields m-1' type='text' name='father' onChange={(e) => Setfather(e.target.value)} />
                <br />
                </div>
                <div className="p-3">
               
                <label className='labels'> Mother Name</label>
                <input className='textfields m-1' type='text' name='mother' onChange={(e) => Setmother(e.target.value)} />
                <br />
                     
                </div>
                <div className="p-3">
                <label className='labels'>Registration no</label>
                <input className='textfields m-1' type='text' name='reg' onChange={(e) => Setreg(e.target.value)} />
                <br />
                <br />
                </div>
                </div>
                <div className='col-lg-6'>
                <div className="heading"><h1> EXPERIENCE </h1></div>
                <div className='container-fluid m-1'>
                    <div className='m-3'>
                    <label className='body1m-3'>Yoga/Meditation Experience : </label>
                    <input type="text" name="exp" onChange={(e) => Setexp(e.target.value)}></input><br />
                    <label className='body1'>Time Spent on Yoga : </label>
                    <input type="text" className='timespent ml-3' name="duration" onChange={(e) => setduration(e.target.value)}></input><br />
                    <label className='body1'>Did You Complete YES+ : </label>
                    <br />
                    <div className='m-1'>
                    <input type="radio" className="radio m-2" name="yes" value='Yes' onChange={(e) => setyes(e.target.value)}></input><label>YES </label>
                    <input type="radio" name="yes" value='No' className='m-2' onChange={(e) => setyes(e.target.value)}></input><label>NO</label><br />
                   
                    </div>
                    <label className='body1'>Did You Complete DSN Course :  </label>
                    <br />
                    <div className='m-1'>
                    <input type="radio" className="radio m-2" name="yes" value='Yes' onChange={(e) => setyes(e.target.value)}></input><label>YES </label>
                    <input type="radio" name="yes" value='No' className='m-2' onChange={(e) => setdsn(e.target.value)}></input><label>NO</label><br />
                    </div>
                    </div>
                    <div className='m-3'>
                    <label className='body1'>Any Other Courses : </label>
                   
                    <input type="text" className="experience" name="anyothercourses" onChange={(e) => setothercourses(e.target.value)}></input>
                    <br />
                    </div>
                    <div className='m-3'>
                    <label className='body1'>Experience Sharing: </label>
                    
                    <input type="text" className="experience" name="experience" onChange={(e) => setexperience(e.target.value)}></input><br />
                    </div>
       
                </div>

                </div>
                </div>
                <div className="d-flex justify-content-center">
                <button className="btn btn-outline-danger back" onClick={back}>Back</button>
                <button className='btn btn-outline-success ml-5' onClick={Submit}>update</button>
                </div>
            
            </div>
           
        </>
    )
}