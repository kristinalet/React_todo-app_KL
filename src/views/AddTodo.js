import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class AddTodo extends Component {
    state = {
        title: "",
        text: "",
        importance: "Low",
    };

handleSubmit = async e  => {
    e.preventDefault();
    await this.props.onAdd(this.state);
    this.setState({
        title: '',
        text: '',
        importance: "Low"
    });
    this.props.history.push('/');
};

handleChange = e => {
    const { value, name } = e.target;
    this.setState({
        [name]: value
    });
}

render () {
    const { title, text, importance} = this.state;
    return (
        <form onSubmit={this.handleSubmit} >
            <input 
                className="form-control mb-2"
                type="text"
                value={title}
                name="title"
                placeholder="Nadpis"
                onChange={this.handleChange}
                required 
            />
            <textarea
                className="form-control mb-2"
                value={text}
                name="text"
                placeholder="Text"
                onChange={this.handleChange} 
            />

            <div class="form-group">
            <select class="form-control mb-2" id="exampleFormControlSelect1" name="importance" value={importance} onChange={this.handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
            </select>
 </div>
        
            <button type="submit" className="btn btn-outline-success" disabled={!title}>
                Ulozit
            </button>
        </form>
        )
    }
};

export default withRouter(AddTodo);