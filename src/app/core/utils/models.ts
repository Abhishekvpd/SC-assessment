export interface MarketPlace {
  data: {
    id: number;
    marketplace?: { id: number; marketplace_name: string };
    file_name?: string;
  }[];
}
