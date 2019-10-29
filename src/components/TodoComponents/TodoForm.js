import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newItem: ""
    };
  }

  handleChange = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("It works!");
    this.props.addItem(this.state.newItem);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="item">Add New</label>
        <input
          type="text"
          name="item"
          id="item"
          value={this.state.newItem}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}
