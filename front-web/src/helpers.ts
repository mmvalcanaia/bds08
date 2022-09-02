import { Gender, SalesByStoreByGender } from './types';

const formatGender = (gender: Gender) => {
  const textByGender = {
    MALE: 'Masculino',
    FEMALE: 'Feminino',
    OTHER: 'Outro'
  };
  return textByGender[gender];
};

export const buildSalesByGenderChart = (sales: SalesByStoreByGender[]) => {
  const labels = sales.map((sale) => formatGender(sale.gender));
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};
