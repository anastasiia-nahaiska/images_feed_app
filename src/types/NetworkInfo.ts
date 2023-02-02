export interface NetworkInfo {
  isConnected: boolean | null;
  setIsConnected: (isConnected: boolean | null) => void;
}
