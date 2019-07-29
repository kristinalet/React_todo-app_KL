import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';
import moment from 'moment';
import axios from './Axios';

class App extends Component {
  state = {
    todos: []
  };

  addTodo = async todo => {
    const newTodo = {
      ...todo,
      createdAt: moment().format('DD.MM.YYYY'),
      finished: false
    };

    const result = await axios.post('/todos.json', newTodo);
    newTodo.id = result.data.name;

    this.setState(prevState => ({
      todos: prevState.todos.concat(newTodo)
    }))
    axios.post('/todos.json', newTodo);
  };

  async componentDidMount() {
    const todos = await axios.get ('/todos.json');
    const result = [];
    console.log(todos)

    if (todos.data) Object.keys(todos.data).forEach(key => {
      const todo = todos.data[key];
      todo.id = key;
      result.push(todo)
    });

    this.setState({
      todos: result
    });
  }

    editTodo = ( todo, index ) => {
      const todos = [...this.state.todos];
      todos.splice(index, 1, todo);
      this.setState({ todos: todos })
    };
  
  render () {
    const { todos } = this.state;

    return (
      <div className="App p-3">
        <AddTodo onAdd={this.addTodo} />
        <hr />
        {todos.map((todo, index) => {
          const handleFinishTodo = () => {
            todo.finished = true;
            this.editTodo(todo, index);
          };

          return (
            <Todo todo={todo} key={todo.id} onFinish={handleFinishTodo} />
          )
        })}
      </div>
    );
  }
}


export default App;
