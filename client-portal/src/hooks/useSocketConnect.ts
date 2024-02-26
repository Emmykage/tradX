import { useEffect, useState } from "react";

interface Data {
  value: string;
  time: number;
  symbol: string;
  timestamp: number;
  open?: number;
  high?: number;
  low?: number;
  close?: number;
  volume?: number;
  trade_count?: number;
  vwap?: number;
}
interface SocketConnectReturn {
  data: Data | null;
  setData: React.Dispatch<React.SetStateAction<Data | null>>;
  connectedSocket: WebSocket | null;
  extraAction: (
    callback: (data: Data | null, socket: WebSocket | null) => void
  ) => void;
}

const useSocketConnect = (
  uri: string = "wss://tradx.io/ws/external-api/",
  authenticate?: Record<string, unknown>
): SocketConnectReturn => {
  const [data, setData] = useState<Data | null>(null);
  const [connectedSocket, setConnectedSocket] = useState<WebSocket | null>(
    null
    );
    
    useEffect(() => {
    const socket = new WebSocket(uri);
    socket.onerror = function (event) {
      console.log(event);
      throw Error("Websocket connection error");
    };

    socket.onopen = () => {
      console.log("authenticate");
      if (authenticate) {
        socket.send(JSON.stringify(authenticate));
      }
      return setConnectedSocket(socket);
    };

    socket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      
      if (
        receivedData?.type === "quote_data" &&
        receivedData?.data?.bid_price &&
        receivedData?.data?.timestamp
      ) {
        const value = {
          time: receivedData?.data?.timestamp,
          value: receivedData?.data?.bid_price,
          symbol: receivedData?.data?.symbol,
          timestamp: receivedData?.data?.timestamp,
        };
        setData(value);
      }
    };

    return () => {
      socket.close();
    };
  }, [uri]);

  const extraAction = (
    callback: (data: Data | null, socket: WebSocket | null) => void
  ) => {
    callback(data, connectedSocket);
  };

  return { data, setData, connectedSocket, extraAction };
};

export default useSocketConnect;
