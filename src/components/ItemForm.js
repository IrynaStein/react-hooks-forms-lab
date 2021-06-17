import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ items, setItems }) {
  
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")

  function onItemFormSubmit(e){
    e.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };
    const newItemsArray = [...items, newItem]
    setItems(newItemsArray)
  }

  function handleChange(e){
    setItemName(e.target.value)
  }

  function onCategoryChange(e){
    setItemCategory(e.target.value)
  }
  console.log(itemCategory)

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={itemName}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={onCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
