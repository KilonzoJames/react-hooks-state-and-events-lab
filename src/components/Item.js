import React,{useState} from "react";

function Item({ name, category }) {
    const [item, setItem] = useState(true)
    function toggleState(){
      setItem(!item)
    }

  return (
    <li className={item? "":"in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleState} className="add">{item? "Add to Cart":"Remove From Cart"}</button>
    </li>
  );
}

export default Item;
