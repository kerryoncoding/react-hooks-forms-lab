import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm( {onItemFormSubmit} ) {

  const [itemName, setItemName]= useState("")
  const [itemCategory, setItemCategory]= useState("Produce")
  

  function handleSelection(e){
   // console.log(e.target.value)
    setItemCategory(e.target.value)
  }

  function handleInput(e){
 //   console.log(e.target.value)
    setItemName(e.target.value)
  }

  function handleFormSubmit(e){
    e.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };
    //console.log(newItem)
    onItemFormSubmit(newItem)
    console.log("here:", onItemFormSubmit)
  }

  
  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleInput}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleSelection}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
