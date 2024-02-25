import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

// TODO - Make the custom hook more clear with errors and message handling
// TODO - Return the socket, in case there are more messages needed to end after call
// TODO - Make the hook more reusable to implement with another connections, markets, trades, notifications, ...etc

interface UseSocketConnectProps {
  uri?: string;
}


const authenticate = {
  action: "auth",
  key: "PK7GN84E0NZ30WBMD7BN",
  secret: "kzUyoHasnVcVPZYnUqxg2U4Kb40flLuutBBh6UrL",
};

const listenStreams = { action: "subscribe", bars: ["BTC/USD"] };

type InitialData = {
      symbol: string,
      timestamp: number,
      open: number,
      high: number,
      low: number,
      close: number,
      volume: number,
      trade_count: number,
      vwap: number,
}

const useSocketConnect = (uri = "wss://tradx.io/ws/external-api/") => {
  const [data, setData] = useState<InitialData | null>(null);
  const [connectedSocket, setConnectedSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState("");

  const socket = new WebSocket(uri);

  useEffect(() => {
    socket.onerror = function (event) {
      throw Error("Websocket connection error");
    };

    socket.onopen = (event) => {
      // Send handshake data
      console.log("authenticate");
      socket.send(JSON.stringify(authenticate));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data?.type === "send_data" && data.data) {
        const updateValue = {
          ...data.data,
          time: data?.data?.timestamp,
          value: data?.data?.open,
        };
        return setData(updateValue);
      }
      console.log(
        data,
        "Listen to streams",
        data[0]?.msg !== "authenticated" && data?.S === "BTC/USD"
      );

      if (data[0]?.msg === "authenticated" && data[0]?.T === "success") {
        socket.send(JSON.stringify(listenStreams));
      }
      if (!data[0]?.T) {
        const updateValue = {
          ...data[0],
          time: data[0]?.timestamp,
          value: data[0]?.open,
        };
        setData(updateValue);
      }
    };
  }, [uri]);

  return { data, connectedSocket };
};

export default useSocketConnect;
