import React, { Component } from "react";
import axios from "axios";
import ListEntry from "./ListEntry.jsx";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: [],
      listName: "Todos"
    };
    this.fetchTodos = this.fetchTodos.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  fetchTodos() {

  }

  handleInput(e) {
    this.setState({
      todo: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    e.target.reset();
  }

  deleteTodo(todo) {

  }

  render() {
    return (
      <div>
        <h1>{this.state.listName}</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          Add Todo: <input onKeyUp={this.handleInput} />
        </form>
        <br />
        <div>
          {this.state.todos.map((todo, index) => {
            return <ListEntry key={index} todo={todo.todo} id={todo.id} delete={this.deleteTodo} />
          }
          )}
        </div>
      </div>
    );
  }
}

export default List;
