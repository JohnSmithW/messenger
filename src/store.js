import { store } from '@risingstack/react-easy-state';

const state = store({
  user: { id: 0 },
  messages: [],
  data: [],
  time: '',
  userId: 0,
  text: '',
  messageSent: true,
  index: 0,
  popUp: false,
});
export default state;
