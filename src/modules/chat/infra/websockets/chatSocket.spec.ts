import { createServer } from 'http';
import { AddressInfo } from 'net';
import { Server } from 'socket.io';
import Client from 'socket.io-client';

import { chatSocket } from './chatSocket';

describe('Teste chat websocket', () => {
  let io;
  let clientSocketOne;
  let clientSocketTwo;

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

  test('Iniciando testes', done => {
    expect(true).toBe(true);
    done();
  });
});
