import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <PieChartCard name="" labels={['Feminino', 'Masculino', 'Outros']} series={[40, 30, 30]} />
      </div>
    </>
  );
}

export default App;
