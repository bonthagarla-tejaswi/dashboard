import {React,useState } from "react";
import axios from 'axios';
export const Datainsert =() =>
{
    const [title,Settitle]=useState([]);
    const [key1,Setkey1]=useState([]);
    const [key2,Setkey2]=useState([]);
    const [content,Setcontent]=useState([]);
    const Submit = async () => {
        try {
          const res = await axios.post("https://buddy-y2rk.onrender.com/admin/articles/"+title+"/"+content+"/"+key1+"/"+key2);
          if (res.data) {
            alert("Successfully added");
          } else {
            alert("Sorry, try again");
          }
        } catch (e) {
          console.log(e);
        }
      };
    return(
        <>  
      <div className="container">
            <h2>Post releated data</h2>
                <div className="form-group " id='email'>
                    <label>Title:</label>
                    <input type="text"  className="form-control" placeholder="Enter Title"onChange={(e)=>Settitle(e.target.value)}/>
                </div>
                <div className="form-group " id='email'>
                    <label>Keyword-1:</label>
                    <input type="text"  className="form-control" placeholder="Enter keyword-1 " onChange={(e)=>Setkey1(e.target.value)}/>
                </div>
                <div className="form-group " id='email'>
                    <label>Keyword-2:</label>
                    <input type="text"  className="form-control" placeholder="Enter keyword-2" onChange={(e)=>Setkey2(e.target.value)}/>
                </div>
                <div className="form-group " id='email'>
                    <label>Content:</label>
                    <textarea className="form-control"  onChange={(e)=>Setcontent(e.target.value)} />
                </div>
                <div className="button">
                    <button  className="btn btn-success" onClick={Submit}>
                        Submit
                    </button>
                </div>
        </div>
        </>
    )
}