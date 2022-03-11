import { Server } from 'socket.io';

const chatSocket = (server: Server) => {
  const io = server.of('/chat');

  io.on('connection', socket => {
    console.log('socket connected');
  });

  io.on('disconnect', socket => {
    console.log('socket disconnected');
    socket.close();
  });
};

export { chatSocket };
