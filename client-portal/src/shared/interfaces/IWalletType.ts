export default interface IWalletType {
  id: number;
  symbol: string;
  name: string;
  is_active: boolean;
  is_fiat?: boolean;
  created_at: string;
  updated_at: string;
}
