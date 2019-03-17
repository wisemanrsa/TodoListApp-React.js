import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => {
        this.setState({ todos: res.data });
      });
  }

  markComplete = id => {
    let todos = this.state.todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    this.setState(todos);
  };

  remove = id => {
    let todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: todos });
  };

  addTodo = title => {
    let todo = {
      id: this.state.todos.length + 1,
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, todo] });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  remove={this.remove}
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
