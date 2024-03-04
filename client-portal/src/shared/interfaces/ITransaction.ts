export enum TransactionType {
  D = "D",
  W = "W",
}

export enum TransactionStatusType {
  S = "S",
  F = "F",
  P = "P",
}

export default interface ITransaction {
  id: string;
  created_at: string;
  updated_at: string;
  type: TransactionType;
  amount: number;
  currency: string;
  status: TransactionStatusType;
  gateway_ref: string;
  wallet: string;
}
