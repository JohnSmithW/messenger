import React from 'react';
import { view } from '@risingstack/react-easy-state';
import ChatHeader from '../ChatHeader/ChatHeader';
import ChatMessage from '../ChatMessage/ChatMessage';
import ChatInput from '../ChatInput/ChatInput';
import './Chat.css';

class Chat extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="chat">
        <ChatHeader name="John" group="friend" />
        <ChatMessage />
        <ChatInput />
      </div>
    );
  }
}

export default view(Chat);
