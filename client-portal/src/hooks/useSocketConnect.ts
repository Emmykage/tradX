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
  socket: WebSocket | null;
  extraAction: (
    callback: (data: Data | null, socket: WebSocket | null) => void
  ) => void;
}

const useSocketConnect = (wsTicket: string): SocketConnectReturn => {
  const [data, setData] = useState<Data | null>(null);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    if (wsTicket){
      const webSocket = new WebSocket(
        `wss://tradx.io/ws/external-api/?ws_ticket=${wsTicket}`
      );
      
    webSocket.onerror = function (event) {
      console.error(event);
      throw Error("Websocket connection error");
    }

    webSocket.onopen = () => {
      webSocket.send(
        JSON.stringify({ type: "join_room", room_name: "BTC_USD" })
      );
      return setSocket(webSocket);
    };

    webSocket.onmessage = (event) => {
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

  }
  
    return () => {
      if(socket){
        socket.close();
      }
    };
  }, [wsTicket]);

  const extraAction = (
    callback: (data: Data | null, socket: WebSocket | null) => void
  ) => {
    callback(data, socket);
  };

  return { data, setData, socket, extraAction };
};

export default useSocketConnect;
