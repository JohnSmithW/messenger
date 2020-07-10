import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import './ChatMessage.css';

class ChatMessage extends React.Component {
  constructor(props) {
    super(props);
    this.messageRef = React.createRef();
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  componentDidUpdate() {
    if (state.messageSent) {
      this.messageRef.current.scrollIntoView();
      state.messageSent = false;
    }
  }

  deleteMessage(index) {
    state.messages.splice(index, 1);
  }

  render() {
    return (
      <div className="chat-main">
        {state.messages.map((message) => {
          return (
            <div
              key={message.id}
              ref={this.messageRef}
              className={
                message.userId === state.userId
                  ? 'message-container message-container_user'
                  : 'message-container message-container_interlocutor'
              }>
              <div
                onClick={() => {
                  this.deleteMessage(message.id);
                }}
                className={
                  message.userId === state.userId
                    ? 'message-container__text message-container__text_user'
                    : 'message-container__text message-container__text_interlocutor'
                }>
                <span className="message-container__text__item">{message.text}</span>
                <span className="message-container__time">{message.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default view(ChatMessage);
