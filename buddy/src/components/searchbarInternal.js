// import { cilSearch } from '@coreui/icons';
// import CIcon from '@coreui/icons-react';
// import React, { useState , useEffect} from 'react';
// import axios from 'axios';

// const SearchBar2 = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResult, setSearchResult] = useState([]);

  

//   const handleSearchSubmit = async () => {
//     try {
//       const res = await axios.get("https://buddy-y2rk.onrender.com/get2/" + searchTerm);
//       if (res.data) {
//         setSearchResult(res.data);
//         console.log(res.data.Name)
//       } else {
//         setSearchResult([]);
//         console.log("error");
//       }
//     } catch (e) {
//       console.log("Error fetching data:", e);
//       setSearchResult([]);
//     }
//   };

//   useEffect(() => {
//     const handleDocumentClick = (event) => {
//       if (!event.target.closest(".box-result")) {
//       }
//     };

//     document.addEventListener('click', handleDocumentClick);

//     return () => {
//       document.removeEventListener('click', handleDocumentClick);
//     };
//   }, []);


//   return (
//     <>
//     <div className='body1'>
      
//     <div className='box1 m-3' >
//     <div class="input-group input-group-lg">
//     <input
//         type="text"
//         placeholder="Search for your details"
//         value={searchTerm}
//         onChange={(e)=>setSearchTerm(e.target.value)}
//         className='border border-success form-control' 
//       />
//         <span class="input-group-text"> <button  className="btn btn-outline-success" onClick={handleSearchSubmit}><CIcon icon={cilSearch} className='anim-none'/></button></span>
//         </div>
//         {searchResult.title}
//     </div>
//     </div>
   
//     </>
//   );
// };

// export default SearchBar2;