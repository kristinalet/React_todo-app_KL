import React, {Component} from 'react';
import TodoButtons from './TodoButtons';
import Axios from 'axios';

class Todo extends Component {
    renderText = () => {
        const {text} = this.props.todo;
        if (!text) return null;

    return (
        <div className="card-text" dangerouslySetInnerHTML={{ __html: text }} />
        )
    };

    handleFinish = async () => {
        await Axios.patch('/todos/' + this.props.todo.id + '.json', {
           finished: true 
        });
        this.props.onFinish()
    };

    render () {
        const { title, createdAt, finished } = this.props.todo;
        let classes = "card";
        if (finished) classes += ' border-success ';

        return (
            <div className="todo mb-2">
                <div className={classes}>
                    <div className="card-body">
                        <h5 className="card-title">
                            {title}
                        </h5>
                        <h6 className="card-subtitle mb-2">
                            Vytvorené {createdAt}
                        </h6>
                        {this.renderText()}
                        <TodoButtons finished={finished} onFinish={this.handleFinish} />
                    </div>
                </div>
            </div>
        );
    }
}


export default Todo;