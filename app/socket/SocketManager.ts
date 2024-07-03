import { Server } from 'socket.io';

export class SocketManager {
  io: Server;
  constructor(io: Server) {
    this.io = io;
console.log('SocketManager constructor');
    io.on('connection', (socket) => {
      console.log('a user connected');

      // Listen for error events on the socket
      socket.on('error', (error) => {
        console.error('Socket error:', error);
      });

      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });

    // Global error listener for the server
    io.on('error', (error) => {
      console.error('Server error:', error);
    });
  }


}