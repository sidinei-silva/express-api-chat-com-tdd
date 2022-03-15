import { createServer } from 'http';
import { AddressInfo } from 'net';
import { Server } from 'socket.io';
import Client from 'socket.io-client';
import { v4 as uuid } from 'uuid';

import { chatSocket } from './chatSocket';

describe('Teste chat websocket', () => {
  let io;
  let clientSocketOne;
  let clientSocketTwo;
  const userOne = uuid();
  const userTwo = uuid();
  const roomId = uuid();

  beforeAll(done => {
    const httpServer = createServer();
    io = new Server(httpServer);

    chatSocket(io);

    httpServer.listen(() => {
      const { port } = httpServer.address() as AddressInfo;
      clientSocketOne = Client(`http://localhost:${port}/chat`);
      clientSocketTwo = Client(`http://localhost:${port}/chat`);

      clientSocketOne.on('connect', done);
    });
  });

  afterAll(() => {
    io.close();
    clientSocketOne.close();
    clientSocketTwo.close();
  });

  test('should join in room', done => {
    clientSocketOne.emit('joinRoom', roomId, userOne);

    clientSocketOne.on('userConnected', arg => {
      expect(arg).toBe(`${userTwo} joined ${roomId}`);
      done();
    });

    clientSocketTwo.emit('joinRoom', roomId, userTwo);
  });
});
