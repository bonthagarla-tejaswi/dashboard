import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Body";
import Navtop from "./components/navbar";
import { Mprofile } from "./components/mprofile";
import Fun from "./components/signup";

function App() {
     

  return (
    <>
      <div>
       <Navtop />
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/profile" element={<Mprofile />} />
            <Route path="/login" element={<Fun />} />  
            
          </Routes>
        </BrowserRouter>
        </div>
      
    </>

  );
}
export default App;