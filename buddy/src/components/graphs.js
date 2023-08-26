import React, { useEffect, useState } from "react";
import { CChart } from "@coreui/react-chartjs";
import axios from "axios";


function DaysAttendedm() {
  const[names1, setnames1]=useState([{}]);
  const[names2, setnames2]=useState([{}]);
  const[names3, setnames3]=useState([{}]);
  const[names4, setnames4]=useState([{}]);
  const[names5, setnames5]=useState([{}]);
  const[names6, setnames6]=useState([{}]);
  const[names7, setnames7]=useState([{}]);
  const[names8, setnames8]=useState([{}]);
  const[names9, setnames9]=useState([{}]);
  const[names10, setnames10]=useState([{}]);
  const[names11, setnames11]=useState([{}]);
  const[names12, setnames12]=useState([{}]);
    
  const daysattendedwly = async() => {
   try{
   const res =await axios.get("https://buddy-y2rk.onrender.com/full/"+localStorage.getItem("token"));
   if(res.data){  
     setnames1(res.data.Month[0]);
     setnames2(res.data.Month[1]);
     setnames3(res.data.Month[2]);
     setnames4(res.data.Month[3]);
     setnames5(res.data.Month[4]);
     setnames6(res.data.Month[5]);
     setnames7(res.data.Month[6]);
     setnames8(res.data.Month[7]);
     setnames9(res.data.Month[8]);
     setnames10(res.data.Month[9]);
     setnames11(res.data.Month[10]);
     setnames12(res.data.Month[11]);
   }
 }catch(e){
   console.log("no data available");
 }
 }
  useEffect( ()=> {
  daysattendedwly();
 },[])

  
  return (
    <CChart
      type="line"
      data={{
        labels: [
          names1.month,
          names2.month,
          names3.month,
          names4.month,
          names5.month,
          names6.month,
          names7.month,
          names8.month,
          names9.month,
          names10.month,
          names11.month,
          names12.month,
        
        ],
        datasets: [
          {
            label: " Attendance Chart",
            backgroundColor: "rgba(220, 220, 220, 0.2)",
            borderColor: "black",
            pointBackgroundColor: "yellow",
            pointBorderColor: "black",
            data: [
              names1.days_attended,
              names2.days_attended,
              names3.days_attended,
              names4.days_attended,
              names5.days_attended,
              names6.days_attended,
              names7.days_attended,
              names8.days_attended,
              names9.days_attended,
              names10.days_attended,
              names11.days_attended,
              names12.days_attended,
            
            ],
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            labels: {
              color: "blue",
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: "#66ccff",
            },
            ticks: {
              color: "#0039ec",
            },
          },
          y: {
            grid: {
              color: "#66ccff",
            },
            ticks: {
              color: "#0039ec",
            },
          },
        },
      }}
    />
  );
}

function PointsSecuredm() {
  const[names1, setnames1]=useState([{}]);
  const[names2, setnames2]=useState([{}]);
  const[names3, setnames3]=useState([{}]);
  const[names4, setnames4]=useState([{}]);
  const[names5, setnames5]=useState([{}]);
  const[names6, setnames6]=useState([{}]);
  const[names7, setnames7]=useState([{}]);
  const[names8, setnames8]=useState([{}]);
  const[names9, setnames9]=useState([{}]);
  const[names10, setnames10]=useState([{}]);
  const[names11, setnames11]=useState([{}]);
  const[names12, setnames12]=useState([{}]);
    
  const daysattendedwly = async() => {
   try{
   const res =await axios.get("https://buddy-y2rk.onrender.com/full/"+localStorage.getItem("token"));
   if(res.data){  
     setnames1(res.data.Month[0]);
     setnames2(res.data.Month[1]);
     setnames3(res.data.Month[2]);
     setnames4(res.data.Month[3]);
     setnames5(res.data.Month[4]);
     setnames6(res.data.Month[5]);
     setnames7(res.data.Month[6]);
     setnames8(res.data.Month[7]);
     setnames9(res.data.Month[8]);
     setnames10(res.data.Month[9]);
     setnames11(res.data.Month[10]);
     setnames12(res.data.Month[11]);
   }
 }catch(e){
   console.log("no data available");
 }
 }
  useEffect( ()=> {
  daysattendedwly();
 },[])

  return (
    <CChart
      type="bar"
      data={{
        labels:  [
          names1.month,
          names2.month,
          names3.month,
          names4.month,
          names5.month,
          names6.month,
          names7.month,
          names8.month,
          names9.month,
          names10.month,
          names11.month,
          names12.month,
         
        ],
        datasets: [
          { lineTension: 0.1,
            label: "points scored",
            backgroundColor: "#0039e6",
            data: [
               names1.points_scored,
               names2.points_scored, 
               names3.points_scored, 
               names4.points_scored,
               names5.points_scored,
               names6.points_scored, 
               names7.points_scored, 
               names8.points_scored,
               names9.points_scored,
               names10.points_scored, 
               names11.points_scored, 
               names12.points_scored,
              ],
          },
        ],
      }}
      labels="months"
      options={{
        plugins: {
          legend: {
            labels: {
              color: "black",
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: "#66ccff",
            },
            ticks: {
              color: "red",
            },
          },
          y: {
            grid: {
              color: "#66ccff",
            },
            ticks: {
              color: "red",
            },
          },
        },
      }}
    />
  );
}
function DaysAPm() {
 
  const[names12, setnames12]=useState([{}]);
    
  const daysattendedwly = async() => {
   try{
   const res =await axios.get("https://buddy-y2rk.onrender.com/full/"+localStorage.getItem("token"));
   if(res.data){  
     setnames12(res.data.Month[11]);
   }
 }catch(e){
   console.log("no data available");
 }
 }
  useEffect( ()=> {
  daysattendedwly();
 },[])
  return (
    <>
      <div className="pie-container">
        <CChart style={{height: '50%', width:'100%' }}
          type="pie"
          data={{
            labels: [ "PRESENT","ABSENT"],
            datasets: [
              {
                backgroundColor: ["#0039e6","red"],
                data: [names12.days_attended,30-names12.days_attended],
              },
            ],
          }}
        
          options={{
            plugins: {
              legend: {
                labels: {
                  color: "#ff66ff",
                },
              },
            },
          }}
        />
      </div>
    </>
  );
}
function PointsTm() {
  const[names12, setnames12]=useState([{}]);
    
  const daysattendedwly = async() => {
   try{
   const res =await axios.get("https://buddy-y2rk.onrender.com/full/"+localStorage.getItem("token"));
   if(res.data){  
     setnames12(res.data.Month[11]);
   }
 }catch(e){
   console.log("no data available");
 }
 }
  useEffect( ()=> {
  daysattendedwly();
 },[])
  return (
    <>
      <CChart
        type="radar"
        data={{
          labels: ["Games", "Attendance", "Seva"],
          datasets: [
            {
              label: "MY POINTS ",
              backgroundColor: "rgba(220, 220, 220, 0.2)",
              borderColor: "black",
              pointBackgroundColor: "white",
              pointBorderColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "orange",
              data: [names12.points_scored/3, names12.points_scored/3, names12.points_scored/3],
            },
    
          ],
        }}
        options={{
          plugins: {
            legend: {
              labels: {
                color: "blue",
              },
            },
          },
          scales: {
            r: {
              grid: {
                color: "#80d4ff",
              },
              ticks: {
                color:  "red",
              },
            },
          },
        }}
      />
    </>
  );
}
function DaysAttendedw() {

     const[names1, setnames1]=useState([{}]);
     const[names2, setnames2]=useState([{}]);
     const[names3, setnames3]=useState([{}]);
     const[names4, setnames4]=useState([{}]);
       
     const daysattendedwly = async() => {
      try{
      const res =await axios.get("https://buddy-y2rk.onrender.com/full/"+localStorage.getItem("token"));
      if(res.data){  
        setnames1(res.data.Week[0]);
        setnames2(res.data.Week[1]);
        setnames3(res.data.Week[2]);
        setnames4(res.data.Week[3]);
      }
    }catch(e){
      console.log("no data available");
    }
    }
     useEffect( ()=> {
     daysattendedwly();
    },[])
 

  return (
    <CChart
      type="line"
      data={{
        labels: [
          names1.week,names2.week,names3.week,names4.week
        ],
        datasets: [
          {
            label: "Attendance Chart",
            backgroundColor: "rgba(220, 220, 220, 0.2)",
            borderColor: "black",
            pointBackgroundColor: "white",
            pointBorderColor: "black",
            data: [ names1.days_attended, names2.days_attended, names3.days_attended, names4.days_attended],
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            labels: {
              color: "blue",
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: "green",
            },
            ticks: {
              color: "red",
            },
          },
          y: {
            grid: {
              color: "black",
            },
            ticks: {
              color: "red",
            },
          },
        },
      }}
    />
  );
}

function PointsSecuredw() {
  const[names1, setnames1]=useState([{}]);
  const[names2, setnames2]=useState([{}]);
  const[names3, setnames3]=useState([{}]);
  const[names4, setnames4]=useState([{}]);
    
  const daysattendedwly = async() => {
    try{
   const res =await axios.get("https://buddy-y2rk.onrender.com/full/"+localStorage.getItem("token"));
   if(res.data){  
     setnames1(res.data.Week[0]);
     setnames2(res.data.Week[1]);
     setnames3(res.data.Week[2]);
     setnames4(res.data.Week[3]);
    
   }
  }catch(e){
    console.log("no data available");
  }
  }
   
  useEffect( ()=> {
  daysattendedwly();
 },[])
  return (
    <CChart
      type="bar"
      data={{
        labels: [
          names1.week,names2.week,names3.week,names4.week

        ],
        datasets: [
          { lineTension: 0.1,
            label: "points secured",
            backgroundColor: "#f87979",
            data: [names1.points_scored, names2.points_scored, names3.points_scored, names4.points_scored],
          },
        ],
      }}
      labels="months"
      options={{
        plugins: {
          legend: {
            labels: {
              color: "black",
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: "#f1f1f1",
            },
            ticks: {
              color: "#ac00e6",
            },
          },
          y: {
            grid: {
              color: "#1a75ff",
            },
            ticks: {
              color: "#ff8c1a",
            },
          },
        },
      }}
    />
  );
}
function DaysAPw() {
  
  const[names4, setnames4]=useState([{}]); 
  const daysattendedwly = async() => {
    try{
   const res =await axios.get("https://buddy-y2rk.onrender.com/full/"+localStorage.getItem("token"));
   if(res.data){  
     setnames4(res.data.Week[3]);
   }
  }catch(e){
    console.log("no data available");
  }
  }
  useEffect( ()=> {
  daysattendedwly();
 },[])
  return (
    <>
      <div className="pie-container">
        <CChart style={{height: '50%', width:'100%' }}
          type="pie"
          data={{
            labels: ["ABSENT", "PRESENT"],
            datasets: [
              {
                backgroundColor: ["#E46651","#41B883"],
                data: [7-names4.days_attended, names4.days_attended],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                labels: {
                  color: "#ff66ff",
                },
              },
            },
          }}
        />
      </div>
    </>
  );
}
function PointsTw() {
  const[names4, setnames4]=useState([{}]); 
  const daysattendedwly = async() => {
    try{
   const res =await axios.get("https://buddy-y2rk.onrender.com/full/"+localStorage.getItem("token"));
   if(res.data){  
     setnames4(res.data.Week[3]);
   }
  }catch(e){
    console.log("no data available");
  }
  }
  useEffect( ()=> {
  daysattendedwly();
 },[])
  return (
    <>
      <CChart
        type="radar"
        data={{
          labels: ["Games", "Attendance", "Seva"],
          datasets: [
            {
              label: "MY POINTS ",
              backgroundColor: "rgba(220, 220, 220, 0.2)",
              borderColor: "black",
              pointBackgroundColor: "rgba(220, 220, 220, 1)",
              pointBorderColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220, 220, 220, 1)",
              data: [names4.points_scored/3,names4.points_scored/3, names4.points_scored/3],
            },
    
          ],
        }}
        options={{
          plugins: {
            legend: {
              labels: {
                color: "blue",
              },
            },
          },
          scales: {
            r: {
              grid: {
                color: "#80d4ff",
              },
              ticks: {
                color:  "#1aff66",
              },
            },
          },
        }}
      />
    </>
  );
}
function DaysAttendedy() {
  const[names1, setnames1]=useState([{}]); 
  const[names2, setnames2]=useState([{}]);
  const daysattendedwly = async() => {
    try{
   const res =await axios.get("https://buddy-y2rk.onrender.com/full/"+localStorage.getItem("token"));
   if(res.data){  
     setnames1(res.data.Year[0]);
     setnames2(res.data.Year[1]);
   }
  }catch(e){
    console.log("no data available");
  }
  }
  useEffect( ()=> {
  daysattendedwly();
 },[])
  return (
    <CChart
      type="line"
      data={{
        labels: [
         names1.year,
         names2.year
        ],
        datasets: [
          {
            label: "My Attendance Chart",
            backgroundColor: "rgba(220, 220, 220, 0.2)",
            borderColor: "black",
            pointBackgroundColor: "white",
            pointBorderColor: "black",
            data: [names1.days_attended, names2.days_attended],
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            labels: {
              color: "blue",
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: "green",
            },
            ticks: {
              color: "red",
            },
          },
          y: {
            grid: {
              color: "black",
            },
            ticks: {
              color: "red",
            },
          },
        },
      }}
    />
  );
}

function PointsSecuredy() {
  const[names1, setnames1]=useState([{}]); 
  const[names2, setnames2]=useState([{}]);
  const daysattendedwly = async() => {
    try{
   const res =await axios.get("https://buddy-y2rk.onrender.com/full/"+localStorage.getItem("token"));
   if(res.data){  
     setnames1(res.data.Year[0]);
     setnames2(res.data.Year[1]);
   }
  }catch(e){
    console.log("no data available");
  }
  }
  useEffect( ()=> {
  daysattendedwly();
 },[])
  return (
    <CChart
      type="bar"
      data={{
        labels: [
         names1.year,names2.year
        ],
        datasets: [
          { lineTension: 0.1,
            label: "points secured",
            backgroundColor: "#f87979",
            data: [names1.points_scored,names2.points_scored] 
          },
        ],
      }}
      labels="YearS"
      options={{
        plugins: {
          legend: {
            labels: {
              color: "black",
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: "#f1f1f1",
            },
            ticks: {
              color: "#ac00e6",
            },
          },
          y: {
            grid: {
              color: "#1a75ff",
            },
            ticks: {
              color: "#ff8c1a",
            },
          },
        },
      }}
    />
  );
}
function DaysAPy() {
  
  const[names2, setnames2]=useState([{}]);
  const daysattendedwly = async() => {
    try{
   const res =await axios.get("https://buddy-y2rk.onrender.com/full/"+localStorage.getItem("token"));
   if(res.data){  
     setnames2(res.data.Year[0]);
   }
  }catch(e){
    console.log("no data available");
  }
  }
  useEffect( ()=> {
  daysattendedwly();
 },[])
  return (
    <>
      <div className="pie-container">
        <CChart style={{height: '50%', width:'100%' }}
          type="doughnut"
          data={{
            labels: ["ABSENT", "PRESENT"],
            datasets: [
              {
                backgroundColor: ["#E46651","#41B883"],
                data: [365-names2.days_attended, names2.days_attended],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                labels: {
                  color: "#ff66ff",
                },
              },
            },
          }}
        />
      </div>
    </>
  );
}
function PointsTy() {
  const[names2, setnames2]=useState([{}]);
  const daysattendedwly = async() => {
    try{
   const res =await axios.get("https://buddy-y2rk.onrender.com/full/"+localStorage.getItem("token"));
   if(res.data){  
     setnames2(res.data.Year[0]);
   }
  }catch(e){
    console.log("no data available");
  }
  }
  useEffect( ()=> {
  daysattendedwly();
 },[])
  return (
    <>
      <CChart
        type="radar"
        data={{
          labels: ["Games", "Attendance", "Seva"],
          datasets: [
            {
              label: "MY POINTS ",
              backgroundColor: "rgba(220, 220, 220, 0.2)",
              borderColor: "black",
              pointBackgroundColor: "rgba(220, 220, 220, 1)",
              pointBorderColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220, 220, 220, 1)",
              data: [names2.points_scored/3, names2.points_scored/3, names2.points_scored/3],
            },
    
          ],
        }}
        options={{
          plugins: {
            legend: {
              labels: {
                color: "blue",
              },
            },
          },
          scales: {
            r: {
              grid: {
                color: "#80d4ff",
              },
              ticks: {
                color:  "#1aff66",
              },
            },
          },
        }}
      />
    </>
  );
}
export { DaysAttendedm, PointsSecuredm, DaysAPm ,PointsTm ,DaysAttendedw, PointsSecuredw, DaysAPw ,PointsTw,DaysAttendedy, PointsSecuredy, DaysAPy ,PointsTy};