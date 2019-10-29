// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Item from "./Item";

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="todoList">
      {props.todoList.map(item => {
        return (
          <Item
            // key={item.id}
            item={item}
            toggleCompleted={props.toggleCompleted}
          />
        );
      })}
      <button className="clear-btn" onClick={props.clearItems}>
        Clear Items
      </button>
    </div>
  );
};

export default TodoList;
