import React, { useEffect, useState  } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import "./games.css";



export const Game=()=>
{
    const nav=useNavigate();
   
    
    const[count,setCount]=useState(0);
    const[name , setUserName]=useState('');

    const getData = async () => {
        try {
          const res = await axios.get('http://localhost:8000/full/' + localStorage.getItem('token'));
          if (res.data) {
            setCount(res.data.Points);
            setUserName(res.data.Name.toUpperCase());
            
          } else {
            console.log("Error getting data");
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getData();
        if(localStorage.getItem("token")==null){
            nav("/login");
         }
      });
    
      const Increment = async () => {
        try {
          const currentPoints = parseInt(count); 
          const updatedPoints = currentPoints + 1; 
          const res = await axios.post('http://localhost:8000/update/' + localStorage.getItem("token") + '/' + updatedPoints);
          if (res.data) {
            setCount(updatedPoints.toString()); 
          } else {
            alert("Failed to update points");
          }
        } catch (error) {
          console.log(error);
        }
      }
   
    return(
        <>
         <div className="text">
           <h1>WELCOME {name}</h1>
        </div> 
        <div className="main"> 
          <div className="">
            <h1 className="text-center text-success">TOTAL POINTS :{count}</h1>
          </div>
       
     
       <div className="d-flex justify-content-evenly games">
       <div className="p-2">
           <a href="/games/dicee" >
       <img className=".img" src="dice.jpg" alt="dice"onClick={Increment} width={150}height={150}></img><br/></a>
            
           </div>
           <div className="p-2">
           <a href="https://poki.com/en/g/11-11" target="_blank" rel="noreferrer">
               <img className=".img" onClick={Increment} src="block.jpg" alt="block" width={150} height={150}/>
            </a>

           </div>
           <div className="p-2">
           <a href="https://poki.com/en/g/ludo-multiplayer" target="_blank" rel="noreferrer">
              <img className=".img" onClick={Increment} src="ludo.jpg" alt="ludo" width={150}height={150}></img><br/>
        </a> 
           </div>
           <div className="p-2"> 
         <a href="https://poki.com/en/g/words-search-classic-edition" target="_blank" rel="noreferrer">
       <img className=".img" onClick={Increment} src="word.jpg" alt="word" width={150}height={150}></img><br/></a>
       </div>
        
       </div>
       </div>
        </>
    )
}