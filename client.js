'use strict';

const io = require('socket.io-client');
const exec = require('child_process').exec;

const socket = io.connect('http://localhost:3000');

socket.on('play-video', (video) => {
  const pathVideo = '/home/diademuertos/Desktop/videos';

  const cmd = `vlc --play-and-exit ${pathVideo}/${video}`;

  console.log(cmd);

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.log(stderr);
    } else {
      console.log(stdout);
    }
  });
});

socket.on('stop-video', () => {
  const cmd = 'ls';

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.log(stderr);
    } else {
      console.log(stdout);
    }
  });
});

socket.on('play-app', (app) => {
  const pathApp = '/home/diademuertos/Desktop/videos';

  const cmd = `vlc --play-and-exit ${pathApp}/${app}`;

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.log(stderr);
    } else {
      console.log(stdout);
    }
  });
});

socket.on('stop-app', () => {
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
