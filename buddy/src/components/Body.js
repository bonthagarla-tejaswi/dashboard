import { useEffect } from "react";
import Gui from "./layoutdashboard";
import {Mprofile} from "./mprofile";
import { useNavigate } from "react-router-dom";


export default function Layout() {
  const nav = useNavigate();
 useEffect(() =>{
  if(localStorage.getItem('token')==null){
    nav('/login')
  }
 })

  return (
    <>
        <div className="text-center display-5 text-bold dashboard-title"><h1>Dashboard</h1></div>
      <div className="margin-top">
        <div className="container-fluid margin-top">
          <div className="row">
            <div className="d-none d-sm-block d-md-block d-lg-block  col-lg-3 col-sm-3 ">
              
            <Mprofile />
       
            </div>
          
            <div className="col-sm-9 col-md-9 gui-layout">
              <Gui />
            </div>
            <div className="col-sm-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}