const SOCKET_URL = process.env.SOCKET_URL || 'http://localhost:8080';
const DIFF_URL = process.env.DIFF_URL || 'http://batakang.com/';
require('dotenv').config();
const Discord = require('discord.js');

// Create a new webhook
const hook = new Discord.WebhookClient(process.env.DISCORD_WEBHOOK_ID, process.env.DISCORD_WEBHOOK_TOKEN);

const io = require('socket.io-client')(SOCKET_URL,
  {
    transportOptions: {
      polling: {
        extraHeaders: {
          'diff_url': `${DIFF_URL}`
        }
      }
  }
  });


io.on('connect', function(){
  console.log(`Connected to diff-socket server to monitor changes on ${DIFF_URL}`);
  hook.send(`I am now alive and monitoring changes on ${DIFF_URL}`);
});

io.on('change', function(data){
  hook.send(data);
});

io.on('disconnect', function(){
  hook.send("I have lost connection to diff-socket server.");
  console.log("Disconnected.");
});