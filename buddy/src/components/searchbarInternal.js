import { cilSearch } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { useState } from 'react';
import axios from 'axios';

const SearchBar2 = () => {
  const [searchTerm2, setSearchTerm2] = useState('');
  const [searchresult, setSearchResult] = useState("");

  const handleSearchSubmit = async() => {
    
    try {
        const res = await axios.get("http://localhost:8000/internalsearch/" +localStorage.getItem("token")+"/"+ searchTerm2);
        if (res.data && res.data.length > 0) {
          setSearchResult(res.data);
          console.log(res.data);
          
        } 
      } catch (e) {
        console.log("no data");
        
     
      }

  };



  return (
    <>
    <div className='body1'>
      
    <div className='box1 m-3' >
    <div class="input-group input-group-lg">
    <input
        type="text"
        placeholder="Search for your details"
        value={searchTerm2}
        onChange={(e)=>setSearchTerm2(e.target.value)}
        className='border border-success form-control' 
      />
        <span class="input-group-text"> <button  className="btn btn-outline-success" onClick={handleSearchSubmit}><CIcon icon={cilSearch} className='anim-none'/></button></span>
        </div>
    </div>
    </div>
    {searchresult}
    </>
  );
};

export default SearchBar2;