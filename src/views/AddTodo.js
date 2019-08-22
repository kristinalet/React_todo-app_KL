import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class AddTodo extends Component {
    state = {
        title: "",
        text: ""
    };

handleSubmit = async e  => {
    e.preventDefault();
    await this.props.onAdd(this.state);
    this.setState({
        title: '',
        text: ''
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
    const { title, text } = this.state;
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
        
            <button type="submit" className="btn btn-outlin-success" disabled={!title}>
                Ulozit
            </button>
        </form>
        )
    }
};

export default withRouter(AddTodo);