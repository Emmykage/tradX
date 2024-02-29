export default interface ITransaction {
  id: string;
  created_at: string;
  updated_at: string;
  type: string;
  amount: number;
  currency: string;
  status: string;
  gateway_ref: string;
  wallet: string;
}
