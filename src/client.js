import io from 'socket.io-client';
import state from './store';

const socket = io.connect('http://localhost:3000');

socket.on('connection', (data) => {
  console.log(data);
});

socket.on('message_sent', (data) => {
  state.messages.push(data);
});

socket.on('got_id', (data) => {
  state.userId = data;
});
export default socket;
