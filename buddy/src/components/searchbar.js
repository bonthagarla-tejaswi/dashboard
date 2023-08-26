import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CIcon from '@coreui/icons-react';
import { cilSearch } from '@coreui/icons';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [url ,seturl] =useState(""); // Start with results hidden

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearchSubmit();
  };

  const handleSearchSubmit = async () => {
    try {
      if(searchTerm.length >3){
      const res = await axios.get("http://localhost:8000/get/" + searchTerm);
      if (res.data && res.data.length > 0) {
        setSearchResult(res.data);
        setShowResults(true); 
        sessionStorage.setItem("searchone",searchTerm)
        seturl("/result")
      // Show results when data is found
      } else {
        setSearchResult([]);
        setShowResults(false); // Hide results when no data
      }
    }
    } catch (e) {
      console.log("Error fetching data:", e);
      setSearchResult([]);
      setShowResults(false);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest(".box-result")) {
        setShowResults(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <>
      <div className="body-search">
        <div className="box">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button onClick={handleSearchSubmit} type='submit' className='btn btn-outline-success'><CIcon icon={cilSearch} className='anim-none' /></button>
        </div>
      </div>

      {showResults && (
        <div className='box-result'>
          {searchResult.map((post, index) => (
            <div key={index} className='result-list'>
              <h4>{post.title}</h4>
              <p>{post.content.slice(0,30)+"......"}</p> 
              <a href={url} >read more..</a><hr />
              
            </div>   
            
            
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBar;
