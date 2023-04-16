import React, { useState } from "react";

const TodoItemList = (props) => {
  const [state, setState] = useState(false);

  function handleClick(e) {
    setState(!state);
  }

  return (
    <li
      style={{ textDecoration: state ? "line-through" : "none" }}
      key={props.key}
      onClick={handleClick}
      onContextMenu={() => props.rightClicked(props.id)}
    >
      {props.name}
    </li>
  );
};

export default TodoItemList;
