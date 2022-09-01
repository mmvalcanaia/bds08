import ReactApexChart from 'react-apexcharts';
import { SalesSummary } from '../../types';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
  summary?: SalesSummary;
};

function PieChartCard({ labels = [], name, series = [], summary }: Props) {
  return (
    <div className="pie-chart-card base-card">
      <div className="chart-info-container">
        <h3 className="chart-total">R$ {summary?.sum}</h3>
        <span className="chart-description">Total de vendas</span>
      </div>
      <div className="chart-container">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          width="300"
          height="350"
          series={series}
        />
      </div>
    </div>
  );
}

export default PieChartCard;
