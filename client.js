'use strict';

var io = require('socket.io-client');
var exec = require('child_process').exec;

const socket = io.connect('http://localhost:3000');

socket.on('chat message', function (msg) {
    console.log(msg);

    exec('ls', function callback(error, stdout, stderr) {
        console.log(stdout);
    });

});

socket.emit('chat message', 'jello with j');