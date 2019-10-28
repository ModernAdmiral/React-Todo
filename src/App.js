import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

const data = [
  {
    name: "Clean Room",
    id: 1,
    completed: false
  },
  {
    name: "Get Groceries",
    id: 2,
    completed: false
  },
  {
    name: "Do dishes",
    id: 3,
    completed: false
  },
  {
    name: "Complete Todo list",
    id: 4,
    completed: false
  },
  {
    name: "Play Video Games",
    id: 5,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: data
    };
  }

  // Class methods to update state
  addItem = name => {
    // update grocery state with a new item
    const newItem = {
      name: name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  };

  filterCompleted = () => {
    this.setState({
      // todoList: this.state.todoList.map((item, index) => {
      //   if (item.completed === true) {
      //     this.state.todoList.splice(index, 1);
      //   } else return item;
      todoList: this.state.todoList.filter(item => !item.completed)
    });
  };

  toggleCompleted = id => {
    // loop through groceries data
    // find the grocery we clicked
    // toggle that grocery's completed property
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });

    // .map, .filter, .reduce, .forEach
  };
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        {console.log(this.state.todoList)}
        <TodoList
          toggleCompleted={this.toggleCompleted}
          todoList={this.state.todoList}
          clearItems={this.filterCompleted}
        />
      </div>
    );
  }
}

export default App;
