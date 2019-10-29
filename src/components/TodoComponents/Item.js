import React from "react";

const Item = props => {
  // console.log(
  //   "props.item.completed => ",
  //   props.item.completed ? " completed" : ""
  // );
  return (
    <div
      className={`item${props.item.completed ? " completed" : ""}`}
      onClick={() => props.toggleCompleted(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;
