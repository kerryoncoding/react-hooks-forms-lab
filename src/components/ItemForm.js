import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const [newItem, setNewItem]= useState({})

  function updateList(e){
    e.preventDefault()
    console.log(e.target.name.value)
    console.log(e.target.category.value)
    setNewItem(
      { name: e.target.name.value, category: e.target.category.value}      
    )
  }

  return (
    <form className="NewItem" onSubmit={updateList}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
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
