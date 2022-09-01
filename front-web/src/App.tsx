import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import { buildSalesByGenderChart } from './helpers';
import { PieChartConfig, SalesByStoreByGender, SalesSummary, Store } from './types';
import { makeRequest } from './utils/requests';

function App() {
  const [store, setStore] = useState<Store>({ id: 1, name: 'Uberaba' });
  const [summary, setSummary] = useState<SalesSummary>();
  const [chartData, setChartData] = useState<PieChartConfig>();

  const handleFilterChange = (filterStore: Store) => {
    setStore(filterStore);
  };

  useEffect(() => {
    makeRequest
      .get<SalesSummary>(`/sales/summary?storeId=${store?.id}`)
      .then((response) => setSummary(response.data));
  }, [store]);

  useEffect(() => {
    makeRequest
      .get<SalesByStoreByGender[]>(`/sales/by-gender?storeId=${store?.id}`)
      .then((response) => {
        const newChartData = buildSalesByGenderChart(response.data);
        setChartData(newChartData);
      });
  }, [store]);

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={handleFilterChange} />
        <PieChartCard
          name=""
          labels={chartData?.labels}
          series={chartData?.series}
          summary={summary}
        />
      </div>
    </>
  );
}

export default App;
