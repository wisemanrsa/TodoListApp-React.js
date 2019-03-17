import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({ title: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            value={this.state.title}
            style={{ flex: "10" }}
            type="text"
            placeholder="Add a todo..."
            onChange={this.onChange}
          />
          <input
            style={{ flex: "1", padding: "5px" }}
            type="submit"
            value="Submit"
            className="btn"
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
