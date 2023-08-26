import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchResultPage = (match) => {
    const nav = useNavigate();
  const [detailedResult, setDetailedResult] = useState([]);

  useEffect(() => {
    if(sessionStorage.getItem('searchone')===null){
        nav("/")
    }
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/get/" +sessionStorage.getItem("searchone"));
        setDetailedResult(res.data);
      } catch (error) {
        console.log("Error fetching detailed data:", error);
      }
    };

    fetchData();
  }, [match]);

  return (
    <div className='container-fluid '>
      <h6 className='text-center border border-danger rounded'>Detailed Search Result of {sessionStorage.getItem("searchone")}</h6>
      {
        detailedResult.map((item, index) => (
          <div key={index}>
            <h2 className='text-primary'>{item.title}</h2>
            <p className='text-success'>{item.content}</p>
          </div>
        ))
      }
    </div>
  );
};

export default SearchResultPage;
