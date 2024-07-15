import { WebSocketContext } from '../components/WebSocketProvider';

export const useWebSocket = () => {
  const socket = React.useContext(WebSocketContext);

  const onOrderPlaced = (callback) => {
    if (socket) {
      socket.on('orderPlaced', callback);
    }
  };

  const onBookAdded = (callback) => {
    if (socket) {
      socket.on('bookAdded', callback);
    }
  };

  return { onOrderPlaced, onBookAdded };
};
