'use strict';

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/play-video/:video', (req, res) => {
  const video = req.params.video;
  io.emit('play-video', video);
  res.send({ msg: 'OK' });
});

app.get('/stop-video', (req, res) => {
  io.emit('stop-video');
  res.send({ msg: 'OK' });
});

app.get('/play-app/:app', (req, res) => {
  const appParam = req.params.app;
  io.emit('play-app', appParam);
  res.send({ msg: 'OK' });
});

app.get('/stop-app', (req, res) => {
  io.emit('stop-app');
  res.send({ msg: 'OK' });
});

io.on('connection', (socket) => {
  socket.on('user', (msg) => {
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
