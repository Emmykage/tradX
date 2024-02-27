import { UTCTimestamp } from "lightweight-charts";

export type CryptoItem = {
  value: number;
  time: UTCTimestamp;
  symbol: string;
  timestamp: number;
  ope?: number;
  high?: number;
  low?: number;
  close?: number;
  volume?: number;
  trade_count?: number;
  vwap?: number;
};

// Define a type for the slice state
export interface CryptoSliceState {
  crypto: Record<string, CryptoItem[]>;
  status: "idle" | "loading" | "succeeded" | "failed";
  start: string;
  end?: string;
  sympol: string;
  timeFrame: "day" | "hour" | "minute" | "month" | "week";
  error: string | Record<string, unknown> | null;
}
