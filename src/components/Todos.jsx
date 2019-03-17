import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              markComplete={this.props.markComplete}
              remove={this.props.remove}
            />
          ))}
        </h3>
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
