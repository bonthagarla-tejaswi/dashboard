import { useEffect, useState } from "react"
import CIcon from '@coreui/icons-react';
import{cibSaucelabs, cibRust} from "@coreui/icons";
import axios from "axios";

 function Mprofile(){
    const [username, setusername] = useState("");
    const [EMAIL, setEMAIL] = useState("");
    const [userid, setuserid] = useState("");
    const [streak, setstreak] = useState(0);
    const[points, setpoints] = useState(0);
    const[url, seturl] = useState("");
   
     var quote;
    
       setInterval(() => {
        fetchData();
       }, 1000 );
            
    
    
      async function fetchData() {
        try {
          const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=forgiveness`, {
            headers: {
              'X-Api-Key': 'eWxpAgdGj8NeBgCNZ+fVHw==eHWPgULIklmE5WKu'
            }
          });
    
          if (response.data.length > 0) {
            const quote = response.data[0].quote;
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
     const name = "anil reddy kota";
      const getDetails = async()=>{
        const res =await axios.post("http://localhost:8000/full/"+name);
        if(res.data) {
          setusername(res.data.Name);
          setEMAIL(res.data.mail_id);
          setuserid(res.data.user_id);
          setstreak(res.data.streak);
          setpoints(res.data.points);
          seturl(res.data.url);
        }
        else{
          alert('Error fetching');
        }
      }
    
  useEffect(()=>{
    getDetails();
  },[]);

    return (
        <div className="smprofile">
               <center>
            hello <i>{username}!</i> 
            <hr />
         
        
            <a href="/profile" className='text-decoration-none mprofile-logo profile-img'><img src={url} alt='user'/></a> 

           
            
            </center>
            
            <div className="profile-details">
            <p>USER ID      :{userid}</p>
                    <p>NAME         : {username}</p>
                    
                    <p>EMAIL        : {EMAIL}</p>
                    <p>streak       : {streak} <CIcon icon={cibRust}  className="icon" /></p>
                    <p>points       : {points} <CIcon icon={cibSaucelabs} className="icon" /></p>
                    <p className="quote">today Quote  :{quote}</p>

            </div>
        </div>
    )
}
 export {Mprofile,url} ;