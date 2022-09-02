export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type Store = {
  id: number;
  name: string;
};

export type SalesByStoreByGender = {
  gender: Gender;
  sum: number;
};

export type SalesSummary = {
  sum: number;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};
