import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import CIcon from '@coreui/icons-react';
import { cilSearch } from '@coreui/icons';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResults, setShowResults] = useState(true);

  const resultBoxRef = useRef(null);

  const handleSearchChange = (event) => {
    handleSearchSubmit();
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    // event.preventDefault();
    
      try {
        const res = await axios.get("http://localhost:8000/get/" + searchTerm);
        if (res.data && res.data.length > 0) {
          setSearchResult(res.data);
          setShowResults(true);
        } else {
          setSearchResult([]);
          setShowResults(false);
        }
      } catch (e) {
        console.log("no data");
        setSearchResult([]);
        setShowResults(false);
      }
   
  };

  const handleResultBoxClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (resultBoxRef.current && !resultBoxRef.current.contains(event.target)) {
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
        <div className='box-result' ref={resultBoxRef} onClick={handleResultBoxClick} >
          {/* {SearchResulterror && <p>{SearchResulterror}</p>} */}
          {searchResult.map((post, index) => (
            <div key={index} className='result-list'>
              <h4>{post.title}</h4>
              <p>{post.content}</p> <hr />
            </div>    
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBar;
