import './styles.css';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

function Filter() {
  return (
    <div className="filter-container base-card">
      <Select
        className="filter-select"
        isClearable={true}
        classNamePrefix="filter-container"
        options={options}
      />
    </div>
  );
}

export default Filter;
