import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import './ChatHeader.css';
import './images/me.jpg';

function popUp() {
  state.popUp = !state.popUp;
}

function ChatHeader(props) {
  return (
    <div className="chat-header">
      <div className="chat-interlocutor">
        <div className="chat-interlocutor-image"></div>
        <div className="chat-interlocutor-name">
          <span className="chat-interlocutor-name__name">{props.name}</span>
          <span className="chat-interlocutor-name__group">{props.group}</span>
        </div>
        <div
          onClick={() => {
            popUp();
          }}
          className="options"></div>
        <div className={state.popUp ? 'options-popup' : 'options-popup_close'}>
          <span className="options-popup__item">Add to friends</span>
          <span className="options-popup__item">Add to groups</span>
          <div
            onClick={() => {
              state.popUp = !state.popUp;
            }}
            className="options-popup__close"></div>
        </div>
      </div>
    </div>
  );
}

export default view(ChatHeader);
