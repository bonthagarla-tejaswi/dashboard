import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Body";
import Navtop from "./components/navbar";
import { Signin } from "./components/pages/signin";
import { Signup } from "./components/pages/signup";
import { Updatepass } from "./components/pages/updatepass";
import Dicee from "./components/pages/games/dicee";
import { Game } from "./components/pages/games";
import Profile from "./components/pages/profile";
import { Details } from "./components/pages/updateprofile";
import SearchResultPage from "./components/pages/search-result";
import { Datainsert } from "./components/pages/admin-postdata ";

function App() {
  return (
    <>
      <div>
      <Navtop />
        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={ <Layout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Signin />} />  
            <Route path="/signup" element={<Signup />} />
            <Route path='/updatepass' element={<Updatepass />}/>
            <Route path='/updateprofiledetails' element={<Details />}/>
            <Route path="/games" element={<Game />}/>
            <Route path="/result" element={<SearchResultPage />}/>
            <Route path='/admin/insertdata' element={<Datainsert />} />
            <Route path="/games/dicee" element={(localStorage.getItem("token")!==null)?<Dicee />:<Signin />}/>
            
          </Routes>
        </BrowserRouter>
        </div>
      
    </>

  );
}
export default App; 