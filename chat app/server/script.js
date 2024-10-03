import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'node:http';
import cors from 'cors';

const app = express();

app.use(cors());

const server = createServer(app);

// Initialize Socket.io with the HTTP server
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

// Listen for new socket connections
io.on('connection', (socket) => {
  console.log('User has been connected');

  // Listen for 'send_message' events from the client
  socket.on('send_message', (data) => {
    console.log(`message from client is ${data.message}`);
    
    // Emit 'the message' event back to the same client
    // Note: This only sends to the client that sent the message
    socket.emit('the message', data);
    
    // If you want to broadcast to all clients, use:
    // io.emit('the message', data);
  });

  //  add event listeners
    socket.on('disconnect', () => {
    console.log('User disconnected');
        });
});


server.listen(4000, () => {
  console.log('Server running on port 4000');
});