import http from 'http';
import { Server } from 'socket.io';

import { logger } from '@shared/infra/logging/logger';

import { webSocket } from '../websockets';
import { app } from './app';

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: '*' },
});

webSocket(io);

const serverPort = process.env.SERVER_PORT || 3333;

server.listen(serverPort, () =>
  logger.info(`Server is running! Port: ${serverPort}`),
);
