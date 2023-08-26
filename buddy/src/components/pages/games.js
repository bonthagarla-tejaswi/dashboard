import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./games.css";

export const Game = () => {
    const nav = useNavigate();
    if(localStorage.getItem('token') === null) {
      localStorage.clear();
      nav("/login")
    }

    const [count, setCount] = useState(0);
    const [name, setUserName] = useState('');
    const [earnCount, setEarnCount] = useState(0);
       useEffect(() =>{
        getData();
        if(localStorage.getItem('token') === null) {
          localStorage.clear();
          nav("/login")
        }
       })
    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:8000/full/' + localStorage.getItem('token'));
            if (res.data) {
                setCount(res.data.Points);
                setUserName(res.data.Name.toUpperCase());
                setEarnCount(res.data.EarnedCount);
            } else {
                console.log("Error getting data");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const Increment = async () => {
        try {
            if (earnCount < 4) {
                const updatedPoints = parseInt(count) + 1;
                const updatedEarnCount = earnCount + 1;
                const res = await axios.post('http://localhost:8000/update/' + localStorage.getItem("token") + '/' + updatedPoints);
                if (res.data) {
                    setCount(updatedPoints.toString());
                    setEarnCount(updatedEarnCount);
                } else {
                    alert("Failed to update points");
                }
            } else {
                alert("You can earn points 4 daily");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleDiceGameClick = () => {
        Increment();
        nav("/games/dicee");
    };

    return (
        <>
            <div className="text">
                <h1>WELCOME {name}</h1>
            </div>
            <div className="main">
                <div className="">
                    <h1 className="text-center text-success">TOTAL POINTS: {count}</h1>
                </div>
                <div className="d-flex justify-content-evenly games">
                    <div className="p-2">
                        <button id="completed" onClick={handleDiceGameClick}>
                            <img className="img" src="dice.jpg" alt="dice" width={150} height={150} />
                        </button><br />
                    </div>
                </div>
            </div>
        </>
    );
};
