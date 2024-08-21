import { useAppSelector } from "@store/hooks";
import { AssetPairSliceState } from "@store/slices/pairs";
import { setSocketData, setSocketInstance } from "@store/slices/trade";
import { setSelectedWallet, setWallets, WalletSliceState } from "@store/slices/wallet";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formatDate, isArrayEmpty, isObjectEmpty } from "utils/utils";


interface Data {
  barchart?: BarChartData;
  onlinetraders?: OnlineTradersData;
}

interface BarChartData {
  value?: number;
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

interface OnlineTradersData {
  count?: number;
  // Add other relevant fields
}

interface SocketConnectReturn {
  data: Data | null;
  setData: React.Dispatch<React.SetStateAction<Data | null>>;
  socket: WebSocket | null;
  oldData:any;
  extraAction: (
    callback: (data: Data | null, socket: WebSocket | null) => void
  ) => void;
}

const useSocketConnect = (wsTicket: string): SocketConnectReturn => {
  const [data, setData] = useState<Data | null>(null);
  const [oldData, setOldData] = useState<any>(null);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const dispatch = useDispatch()
  const {  wallets } = useAppSelector(
    (state: { wallet: WalletSliceState,  }) => state.wallet
  );
  const  { selectedAsset } = useAppSelector(
    (state: {assetPair: AssetPairSliceState }) => state.assetPair
);

  useEffect(() => {
    if (wsTicket){
      const webSocket = new WebSocket(
         `wss://xtradx.com/ws/external-api/?ws_ticket=${wsTicket}`
      );
      
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

      webSocket.send( 
        JSON.stringify({
          type: "join_group",
          group_name: "o_c"
        }),
      );
      webSocket.send( 
        JSON.stringify({
          "type": "init_bars_data",
          "group_name": "TEST"
        }),
      );
      return setSocket(webSocket);
    };

    webSocket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      
    
      if (receivedData.m === 'init_bars_data'){
        const initialData = receivedData?.d[0]?.[selectedAsset?.symbol]?.map((socketData: any) => ({
          open: socketData?.o,
          high: socketData?.h,
          low: socketData?.l,
          close: socketData?.c,
          timestamp: new Date(socketData?.t).getTime(),
          time: Date.parse(socketData?.t),
          value: (socketData?.o + socketData?.c)/2,
        }));

        setOldData(initialData)
        } else if (receivedData.m === 'b_d' && !isArrayEmpty(receivedData?.d)) {

          const socketData = receivedData.d[0];
          const newData: BarChartData = {
            open: socketData?.o,
            high: socketData?.h,
            low: socketData?.l,
            close: socketData?.c,
            timestamp: new Date(socketData?.t).getTime(),
            time: Date.parse(socketData?.t),
            value: (socketData?.o + socketData?.c)/2,
          };
     
          setData(prevData => {
            return {
              ...prevData,
              barchart: { ...newData},
            };
          });
          
        } else if (receivedData.m === 'o_c') {
           
           const onlineTradersData: OnlineTradersData = {
             count: receivedData.d,
           };
           setData(prevData => ({ ...prevData, onlinetraders: onlineTradersData }));
         
      } else if( receivedData.m === 'wt'){
        const updatedWallets = wallets.map((item)=>{
          if(item.id == receivedData.d[0].id){
            return {...item , balance:receivedData.d[0].balance}
          }
          return item
        })
        dispatch(setWallets(updatedWallets))
        dispatch(setSelectedWallet(receivedData.d[0]))
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

  return { data, oldData,setData, socket, extraAction };
};

export default useSocketConnect;
