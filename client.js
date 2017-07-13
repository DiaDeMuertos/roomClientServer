'use strict';

const io = require('socket.io-client');
const exec = require('child_process').exec;

const socket = io.connect('http://localhost:3000');

socket.on('play', (video) => {
  const pathVideo = '/home/diademuertos/Desktop/videos';

  const cmd = `vlc --play-and-exit ${pathVideo}/${video}`;

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.log(stderr);
    } else {
      console.log(stdout);
    }
  });
});

socket.on('stop', () => {
  const cmd = 'ls';

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.log(stderr);
    } else {
      console.log(stdout);
    }
  });
});

socket.emit('user', 'AlienWare_1');
