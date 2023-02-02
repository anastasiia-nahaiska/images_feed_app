import React, { createContext, ReactNode, useState } from 'react';
import { NetworkInfo } from '../types/NetworkInfo';

export const NetworkInfoContext = createContext<NetworkInfo>({
  isConnected: false,
  setIsConnected: () => {},
});

type Props = {
  children: ReactNode;
};

export const NetworkInfoContextProvider: React.FC<Props> = ({ children }) => {
  const [isConnected, setIsConnected] = useState<boolean | null>(false);

  const contextValues = {
    isConnected,
    setIsConnected,
  };

  return (
    <NetworkInfoContext.Provider value={contextValues}>
      {children}
    </NetworkInfoContext.Provider>
  );
};
