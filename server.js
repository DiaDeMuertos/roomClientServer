'use strict';

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/send/:video', (req, res) => {
  const video = req.params.video;
  io.emit('video', video);
  res.send({ msg: 'OK' });
});

io.on('connection', (socket) => {
  socket.on('video', (msg) => {
    console.log(`message: ${msg}`);
  });
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on port:3000');
});
