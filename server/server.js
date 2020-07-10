const express = require('express');
const app = express();

app.use(express.static('public'));

server = app.listen('3000', () => console.log('server is running...'));
var id = 0;

function getTime() {
  const currentDate = new Date();
  var minutes = currentDate.getMinutes();
  if (minutes < 10) {
    var time = currentDate.getHours() + ':' + '0' + currentDate.getMinutes();
  } else {
    time = currentDate.getHours() + ':' + currentDate.getMinutes();
  }
  return time;
}

const io = require('socket.io')(server);
io.on('connection', (socket) => {
  socket.id = id;
  socket.emit('got_id', socket.id);
  console.log('new user connected' + socket.id);
  socket.on('message_created', (data) => {
    io.sockets.emit('message_sent', { userId: socket.id, id: data.id, text: data.text, time: getTime() });
    console.log(data);
  });
  id++;
});

/*
const express = require('express');
const app = express();
const fs = require('fs');

var contents = fs.readFileSync('server/dataBase.json');
var messages = JSON.parse(contents);

app.use(express.static('public'));

server = app.listen('3000', () => console.log('server is running...'));
var id = 0;

function getTime() {
  const currentDate = new Date();
  var minutes = currentDate.getMinutes();
  if (minutes < 10) {
    var time = currentDate.getHours() + ':' + '0' + currentDate.getMinutes();
  } else {
    time = currentDate.getHours() + ':' + currentDate.getMinutes();
  }
  return time;
}

const io = require('socket.io')(server);
io.on('connection', (socket) => {
  socket.emit('message_sent', messages);
  socket.id = id;
  socket.emit('got_id', socket.id);
  console.log('new user connected' + socket.id);
  socket.on('message_created', (data) => {
    contents = fs.readFileSync('server/dataBase.json');
    messages = JSON.parse(contents);
    messages.push({ userId: socket.id, id: data.id, text: data.text, time: getTime() });
    fs.writeFileSync('server/dataBase.json', JSON.stringify(messages));
    io.sockets.emit('message_sent', messages);
    console.log(data);
  });
  id++;
});

*/
