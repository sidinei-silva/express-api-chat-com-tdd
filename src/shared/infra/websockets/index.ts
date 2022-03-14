import { Server } from 'socket.io';

import { chatSocket } from '@modules/chat/infra/websockets/chatSocket';

const webSocket = (server: Server) => {
  chatSocket(server);
};

export { webSocket };
