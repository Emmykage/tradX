import { setSocketData } from "@store/slices/trade";
import { useEffect, useState } from "react";
import { formatDate, isArrayEmpty, isObjectEmpty } from "utils/utils";

interface Data {
  value?: string;
  time?: string | number;
  symbol?: string;
  timestamp?: number;
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
         `wss://xtradx.com/ws/external-api/?ws_ticket=${wsTicket}`
      );
      // ws://xtradx.com/ws/external-api/?ws_ticket={your_ticket}
      
    webSocket.onerror = function (event) {
      throw Error("Websocket connection error");
    }

    webSocket.onopen = () => {
      webSocket.send(
        JSON.stringify({
          group_name: "TEST",
          type: "join_group"
        })
      );
      return setSocket(webSocket);
    };

    webSocket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      if (
        receivedData?.type === "send_message" &&
        !isArrayEmpty(receivedData?.d)
        ) {
          const socketData = receivedData?.d[0];
          const value = {
            open: socketData?.o,
            high:socketData?.h,
            low: socketData?.l,
            close: socketData?.c,
            timestamp: new Date(socketData?.t).getTime(),
            // value: socketData?.v,
            // vwap: socketData?.vw,
            time:  Date.parse(`${new Date(socketData?.t)}`),
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

  useEffect(() => {

    setSocketData(data);
  }, [data])

  const extraAction = (
    callback: (data: Data | null, socket: WebSocket | null) => void
  ) => {
    callback(data, socket);
  };

  return { data, setData, socket, extraAction };
};

export default useSocketConnect;
