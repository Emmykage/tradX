export default interface INews {
  author: string;
  content: string;
  created_at: number;
  headline: string;
  id: number;
  images: { size: string; url: string }[];
  source: string;
  summary?: string;
  symbols: string[] | [];
  updated_at: number;
  url: string;
}
