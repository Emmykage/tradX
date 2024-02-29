export default interface IWallet {
  name: string;
  account_type__image: string;
  account_type__symbol: string;
  account_type__name: string;
  account_type: string;
  available_balance: number;
  balance: number;
  created_at: string;
  updated_at: string;
  id: string;
  user: string;
}
