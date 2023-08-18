import React from "react";
import { CChart } from "@coreui/react-chartjs";


function DaysAttendedm() {
  
  return (
    <CChart
      type="line"
      data={{
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: " Attendance Chart",
            backgroundColor: "rgba(220, 220, 220, 0.2)",
            borderColor: "black",
            pointBackgroundColor: "white",
            pointBorderColor: "black",
            data: [15, 20, 12, 3, 10, 4, 9, 8, 10, 4, 5, 5, 4, 4, 5],
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

function PointsSecuredm() {
  return (
    <CChart
      type="bar"
      data={{
        labels:  [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          { lineTension: 0.1,
            label: "points scored",
            backgroundColor: "#f87979",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 40, 40, 65, 52],
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
function DaysAPm() {
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
                data: [60, 20],
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
              data: [65, 59, 90],
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
function DaysAttendedw() {
  return (
    <CChart
      type="line"
      data={{
        labels: [
          "week1","week2","week3","week4",
        ],
        datasets: [
          {
            label: "Attendance Chart",
            backgroundColor: "rgba(220, 220, 220, 0.2)",
            borderColor: "black",
            pointBackgroundColor: "white",
            pointBorderColor: "black",
            data: [6,5,7,6],
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
  return (
    <CChart
      type="bar"
      data={{
        labels: [
          "week1","week2","week3","week4",

        ],
        datasets: [
          { lineTension: 0.1,
            label: "points secured",
            backgroundColor: "#f87979",
            data: [40, 20, 12, 39],
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
                data: [5,7],
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
              data: [65, 59, 90],
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
  return (
    <CChart
      type="line"
      data={{
        labels: [
         "year1"
        ],
        datasets: [
          {
            label: "My Attendance Chart",
            backgroundColor: "rgba(220, 220, 220, 0.2)",
            borderColor: "black",
            pointBackgroundColor: "white",
            pointBorderColor: "black",
            data: [200],
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
  return (
    <CChart
      type="bar"
      data={{
        labels: [
         "year1"
        ],
        datasets: [
          { lineTension: 0.1,
            label: "points secured",
            backgroundColor: "#f87979",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 40, 40, 65, 52],
          },
        ],
      }}
      labels="YEARS"
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
                data: [100, 265],
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
              data: [300, 590, 490],
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