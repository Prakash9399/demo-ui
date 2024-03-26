import React, { useState } from 'react';

const SearchBar = () => {
  const [searchData,setSearchData]=useState();
  function onchange(e){
         setSearchData(e.target.value)
         console.log(searchData)
   }
  return (
    <>
    <input type='text' onChange={onchange} className=" bg-slate-800  rounded-xl" placeholder='Search'/>
    </>
  );
};

export default SearchBar;
