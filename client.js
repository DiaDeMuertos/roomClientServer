'use strict';

const io = require('socket.io-client');
const exec = require('child_process').exec;

const socket = io.connect('http://localhost:3000');

socket.on('video', (video) => {
  const pathVideo = '/home/diademuertos/Desktop/video';

  const cmd = `vlc --play-and-exit ${pathVideo}/${video}.mp3`;

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.log(stderr);
    } else {
      console.log(stdout);
    }
  });
});

socket.emit('video', 'AlienWare_1');
