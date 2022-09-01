import { SalesByStoreByGender } from './types';

export const buildSalesByGenderChart = (sales: SalesByStoreByGender[]) => {
  const labels = sales.map((sale) => sale.gender);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};
