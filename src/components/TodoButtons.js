import React, { Component } from 'react';
import { GoCheck } from 'react-icons/go';
 
class TodoButtons extends Component {
 
  render () {
    const { finished } = this.props.todo;
    let finishButton;
    if (!finished) {
      finishButton = (
        <button id="checkButton" type="button" class="btn btn-default btn-sm" aria-label="check" onClick={this.props.onFinish}>
        <span aria-hidden= "true"><GoCheck size = "20px"/></span>
        </button>
      )
    }
 
    return (
      <>
      <button type="button" class="close" aria-label="Close" onClick={this.props.onRemove}>
      <span aria-hidden="true">&times;</span>
      </button>
      {finishButton}
      </>
    )
  }
}
 
export default TodoButtons;