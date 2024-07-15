import React, { createContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

export const WebSocketContext = createContext();

const WebSocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('https://evalc-3.onrender.com');
    setSocket(newSocket);

    return () => newSocket.close();
  }, [setSocket]);

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
