export type Store = {
  id: number;
  name: string;
};

export type SalesByStoreByGender = {
  gender: string;
  sum: number;
};

export type SalesSummary = {
  sum: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};
