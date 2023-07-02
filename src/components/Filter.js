import React, {useState} from "react";



function Filter({ onCategoryChange, onSearchChange }) {

  // const [input, setInput]=useState("")

  // function searchInput(e){
  //   console.log(e.target.value)
  //   setInput(e.target.value)
  // }


  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
