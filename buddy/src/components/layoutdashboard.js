import { useState } from "react";
import { DaysAttendedm, PointsSecuredm, DaysAPm, PointsTm, DaysAttendedw, PointsSecuredw, DaysAPw, PointsTw, DaysAttendedy, PointsSecuredy, DaysAPy, PointsTy } from "./graphs"

export default function Gui() {
    const [heading, setheading] = useState("Monthly");
    const displaymonthly = () => {
        document.getElementById("monthly").hidden = false;
        
        document.getElementById("weekly").hidden = true;
        document.getElementById("yearly").hidden = true;
        setheading("Monthly")
    }
    const displayweekly = () => {
        document.getElementById("weekly").hidden = false;
        document.getElementById("monthly").hidden = true;
        document.getElementById("yearly").hidden = true;
        setheading("Weekly")
    }
    const displayyearly = () => {
        document.getElementById("yearly").hidden = false;
        document.getElementById("weekly").hidden = true;
        document.getElementById("monthly").hidden = true;
        setheading("Yearly")
    }
    const update = () => {
         setheading("Monthly");
    }

    return (
        <div className="chart-body">

            <div className="col-sm-12 charts-play">
                <center>
                    <button className="btn btn-outline-success" onClick={displaymonthly} >Monthly</button>
                    <button className="btn btn-outline-success" onClick={displayweekly}>Weekly</button>
                    <button className="btn btn-outline-success" onClick={displayyearly} >Yearly</button>
                </center>
            </div>
            <div><hr /></div>
            <h1 className="text-center">{heading}</h1>
            <div><h /></div>
            <div id="monthly" >

                <div className="row">
                    <div className="col-sm-12 col-md-6 charts" >
                        <PointsSecuredm  className="charts"/>
                    </div>
                    <div className="col-sm-12 col-md-6 charts" >
                        <DaysAttendedm />

                    </div>
                    <div className="col-sm-12 col-md-6 charts-2" >
                        <PointsTm />

                    </div>

                    <div className="col-sm-12 col-md-6 charts-2">
                        <DaysAPm />

                    </div>
                </div>
            </div>
            <div id="weekly" hidden>

     <div className="col-sm-12 charts-play">
                <center>
                   
                </center>
                <hr />
            </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 charts" >
                        <PointsSecuredw />
                    </div>
                    <div className="col-sm-12 col-md-6 charts" >
                        <DaysAttendedw />

                    </div>
                    <div className="col-sm-12 col-md-6 charts-2" >
                        <PointsTw />

                    </div>

                    <div className="col-sm-12 col-md-6 charts-2">
                        <DaysAPw />

                    </div>
                </div>
                </div>
                <div id="yearly" hidden>

                    <div className="row">
                        <div className="col-sm-12 col-md-6 charts" >
                            <PointsSecuredy />
                        </div>
                        <div className="col-sm-12 col-md-6 charts" >
                            <DaysAttendedy />

                        </div>
                        <div className="col-sm-12 col-md-6 charts-2" >
                            <PointsTy />

                        </div>

                        <div className="col-sm-12 col-md-6 charts-2">
                            <DaysAPy />

                        </div>
                    </div>

                    
                </div>

            </div>
        


        

    )
}