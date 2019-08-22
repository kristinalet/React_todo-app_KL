import React, { Component } from 'react';
import AddTodo from './views/AddTodo';
import axios from './axios'; //můj axios s mým nastavením
import { HashRouter, Switch, Route } from 'react-router-dom';
import findIndex from 'lodash/findIndex';
 
import moment from 'moment';
import TodoList from './views/TodoList';
import Navbar from './Navbar';
 
class App extends Component {
  state = {
    todos: []
  };
 
  async componentDidMount() {
    const result = await axios.get("/todos");
    this.setState({todos: result.data});
}
 
  addTodo = async todo => {
    const newTodo = {
      ...todo,
      createdAt: moment().format(),
      finished: false
    };
 
    const result = await axios.post('/todos', newTodo);
    newTodo.id = result.data;
 
    this.setState(prevState => ({
      todos: prevState.todos.concat(newTodo)
    }));
  };
 
  editTodo = todo => {
    const index = findIndex(this.state.todos, {id: todo.id});
    const todos = [...this.state.todos];
    todos.splice(index, 1, todo);
    this.setState({ todos: todos })
  };
 
  removeTodo = todo => {
    const index = findIndex(this.state.todos, {id: todo.id});
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos: todos });
  };
 
  render() {
    const { todos } = this.state;
 
    return (
      <div className="App-3">
        <HashRouter>
          <Navbar />
          <Switch>
            <Route
              path="/"
              exact
              render={() => <TodoList onEdit={this.editTodo} onRemove={this.removeTodo} todos={todos} />}
            />
            <Route
              path="/add"
              render={() => <AddTodo todos={todos} onAdd={this.addTodo} />}
            />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
 
export default App;