import React, {Component} from 'react';
import Axios from './Axios';

class TodoButtons extends Component {

    handleFinish = async () => {
        await Axios.patch( '/todos/' + this.props.todo.id + '.json', {
            finished: true
        })
    };
        
        render() {
            const { finished } = this.props;
            let finishButton;
            if (!finished) {
            finishButton = (
                <button type="button" className="btn btn-success float-right" onClick={this.props.onFinish}>
                    Dokoncit
                </button>
            );
            }

            return (
                <>
                <button type="button" className="btn btn-light">
                    Zmazat
                </button>
                 {finishButton}
                </>
            );
    }
    
}

    
export default TodoButtons;