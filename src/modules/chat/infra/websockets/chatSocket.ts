import { Server } from 'socket.io';

const chatSocket = (server: Server) => {
  const io = server.of('/chat');

  io.on('connection', socket => {
    console.log('socket connected');
    socket.on('joinRoom', (room, userId) => {
      socket.join(room);
      console.log(`${userId} joined ${room}`);
      socket.to(room).emit('userConnected', `${userId} joined ${room}`);

      socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`);
        socket.leave(room);
      });
    });
  });

  io.on('disconnect', socket => {
    console.log('socket disconnected');
    socket.close();
  });
};

export { chatSocket };
