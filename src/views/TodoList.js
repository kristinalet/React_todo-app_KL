import React, { Component } from 'react';
import Todo from './../components/Todo';
import Masonry from 'react-masonry-component'
import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import moment from 'moment';
 
class TodoList extends Component {
  state = {
    Low : true,
    Medium : true,
    High : true,
    Urgent : true
  }

  handleChecked = event => {
    const { name, checked } = event.target;
    this.setState({
      [name] : checked
    });
  }

  render() {
    const {Low, Medium, High, Urgent} = this.state;
    let todos = this.props.todos;

    const filteredArray = todos.filter((todo) => {return todo.finished});
    const filteredArrayUnfinished = todos.filter((todo) => {return !todo.finished});
    filteredArray.sort(function(a, b){
    return moment(b.createdAt).diff(moment(a.createdAt))
    });
    filteredArrayUnfinished.sort(function(a, b){
    return moment(b.createdAt).diff(moment(a.createdAt))
    });
    todos = filteredArrayUnfinished.concat(filteredArray);

    let finalTodos = [];
    if (Low === true) {
    const filteredCheck = todos.filter((todo) => {return todo.importance==="Low"});
    finalTodos = finalTodos.concat(filteredCheck);
    }
    if (Medium === true) {
    const filteredCheck = todos.filter((todo) => {return todo.importance==="Medium"});
    finalTodos = finalTodos.concat(filteredCheck);
    }
    if (High === true) {
    const filteredCheck = todos.filter((todo) => {return todo.importance==="High"});
    finalTodos = finalTodos.concat(filteredCheck);
    }
    if (Urgent === true) {
    const filteredCheck = todos.filter((todo) => {return todo.importance==="Urgent"});
    finalTodos = finalTodos.concat(filteredCheck);
    }
  return(
    <>
    <div>
      <span className="checkBoxes">
      <input type="checkbox" onChange={this.handleChecked} checked={Low} name="Low" /> 
      <div className="LowStatus" /> 
      Low       
      </span>  
      <span className="checkBoxes">
      <input type="checkbox" onChange={this.handleChecked} checked={Medium} name="Medium" /> 
      <div className="MediumStatus" /> 
      Medium       
      </span> 
      <span className="checkBoxes">
      <input type="checkbox" onChange={this.handleChecked} checked={High} name="High" /> 
      <div className="HighStatus" /> 
      High     
      </span> 
      <span className="checkBoxes">
      <input type="checkbox" onChange={this.handleChecked} checked={Urgent} name="Urgent" /> 
      <div className="UrgentStatus" /> 
      Urgent      
      </span>   
      </div>
      <br />
    <Masonry className="todos">
      <Link className="link-plus card plus todo mb-2" to="/add">
      <GoPlus className="plusko" size="30px" /> Add new todo </Link>
      {finalTodos.map((todoData) => {
        const handleFinishTodo = () => {
          todoData.finished = true;
          this.props.onEdit(todoData);
        };
 
        const handleRemoveTodo = () => {
          this.props.onRemove(todoData)
        };
 
        return (
          <Todo todo={todoData}
                key={todoData.id}
                onFinish={handleFinishTodo}
                onRemove={handleRemoveTodo}
        />
      )
      })}
    </Masonry>
    </>
  )
  }
}
 
 
export default TodoList;