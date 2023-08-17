import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Body";
import Navtop from "./components/navbar";

function App() {
  return (
    <>
      <div>
       <Navtop />
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Layout />} />            
          </Routes>
        </BrowserRouter>
        </div>
      
    </>

  );
}
export default App;