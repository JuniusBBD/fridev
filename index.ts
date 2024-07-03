import 'dotenv/config';
import { api } from './app/app';
import { SocketManager } from './app/socket/SocketManager';
import { Server } from 'socket.io';
import IP from 'ip';

let socketManager: SocketManager;

export const getIOManager = () => socketManager;
const PORT: number = Number(process.env.PORT);

api()
  .then(app => app.listen(PORT))
  .then((server) => {
    // Socket setup
    const io = new Server(server, {
      cors: {
        origin: '*'
      },
      transports: ['websocket', 'polling']
    });

    socketManager = new SocketManager(io);

    console.log(`Socket is running on port: http://${IP.address()}:${PORT}`);
    console.log(`App is running on port: http://${IP.address()}:${PORT}`);
  });
