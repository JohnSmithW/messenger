import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import './ChatInput.css';
import socket from '../../client';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.getTime = this.getTime.bind(this);
  }

  getTime() {
    const currentDate = new Date();
    var minutes = currentDate.getMinutes();
    if (minutes < 10) {
      var time = currentDate.getHours() + ':' + '0' + currentDate.getMinutes();
    } else {
      time = currentDate.getHours() + ':' + currentDate.getMinutes();
    }
    state.time = time;
  }

  handleInput() {
    const value = event.target.value;
    state.text = value;
  }

  sendMessage() {
    this.getTime();
    if (state.text !== '' && !/^\s+$/.test(state.text)) {
      var message = { id: state.index, isUser: true, text: state.text, time: state.time };
      socket.emit('message_created', message);
      state.text = '';
      state.messageSent = true;
      state.index++;
    }
  }

  render() {
    return (
      <form className="chat-input-container">
        <input value={state.text} onChange={this.handleInput} className="chat-input-container__input" placeholder="say hi" />
        <button type="submit" onClick={this.sendMessage} className="chat-input-container__button">
          <div className="circle"></div>
          <span className="button__text">send</span>
        </button>
      </form>
    );
  }
}

export default view(ChatInput);

window.onsubmit = function () {
  return false;
};
