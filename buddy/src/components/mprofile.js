import { useEffect, useState } from "react"
import CIcon from '@coreui/icons-react';
import{cibSaucelabs, cibRust} from "@coreui/icons";
import axios from "axios";

export default function Mprofile(){
    const [username, setusername] = useState("");
    const [EMAIL, setEMAIL] = useState("");
    const [userid, setuserid] = useState("");
    const [streak, setstreak] = useState(0);
    const[points, setpoints] = useState(200);
   
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
    

    


    return (
        <div className="smprofile">
               <center>
            hello {username}
            <hr />
         
        
            <a href="/profile" className='text-decoration-none mprofile-logo profile-img'><img src='http://mecap.in/assets/anilimg.jpeg' alt='user'/></a> 

           
            
            </center>
            <div className="profile-details">
                <pre>
                    <p>NAME             : {username}</p>
                    <p>USER ID          :{userid}</p>
                    <p>EMAIL            : {EMAIL}</p>
                    <p>streak           : {streak} <CIcon icon={cibRust}  className="icon" /></p>
                    <p>points           : {points} <CIcon icon={cibSaucelabs} className="icon" /></p>
                    <p className="quote">today Quote      :   <br/> 
                    {quote}</p>
                </pre>

            </div>
        </div>
    )
}
