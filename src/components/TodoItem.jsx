import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyles = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "3px #ccc dotted"
    };
  };

  //   markComplete = () => {
  //     let todo = { ...this.props.todo };
  //     todo.completed = this.props.completed ? false : true;
  //     this.setState(todo);
  //   };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyles()}>
        <p>
          <input type="checkbox" onChange={() => this.props.markComplete(id)} />{" "}
          {title}
          <button onClick={() => this.props.remove(id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
