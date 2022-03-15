import { Server } from 'socket.io';

import { logger } from '@shared/infra/logging/logger';

const chatSocket = (server: Server) => {
  const io = server.of('/chat');

  io.on('connection', socket => {
    logger.info('Socket connected');
    socket.on('joinRoom', (room, userId) => {
      socket.join(room);
      logger.info(`${userId} joined ${room}`);
      socket.to(room).emit('userConnected', `${userId} joined ${room}`);

      socket.on('disconnect', () => {
        logger.info(`${userId} disconnected`);
        socket.leave(room);
      });
    });

    socket.on(
      'sendMessage',
      (message: string, userId: string, room: string) => {
        logger.info(`${userId} - ${message} in ${room}`);
        socket.to(room).emit('chatMessage', { userId, message });
      },
    );
  });

  io.on('disconnect', socket => {
    logger.info('Socket disconnected');

    socket.close();
  });
};

export { chatSocket };
