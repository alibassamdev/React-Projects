import React, { useState, useRef } from "react";
import TodoItemList from "./TodoItemList";
import './styles.css'

function App() {
  let [items, addItems] = useState([]);
  const itemValue = useRef(null);

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  function handleClick() {
    addItems([...items, itemValue.current.value]);
    itemValue.current.value = null;
  }

  function handleRight(id){
    addItems(items => items.filter((v,i) => i !== id))
  }

  return (
    <>
      <h1 className="info">Left Click for completed | Right Click to remove</h1>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input ref={itemValue} type="text" />
          <button onClick={handleClick}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {items.map((v, i) => (
              <TodoItemList key={i} name={v} id={i} rightClicked={handleRight}/>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
