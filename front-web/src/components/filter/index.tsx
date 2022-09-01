import './styles.css';
import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import { Store } from '../../types';
import { makeRequest } from '../../utils/requests';

type Props = {
  onFilterChange: (data: Store) => void;
};

function Filter({ onFilterChange }: Props) {
  const [store, setStore] = useState<Store>();
  const [selectStore, setSelectStore] = useState<Store[]>([]);

  useEffect(() => {
    makeRequest.get<Store[]>('/stores').then((response) => {
      setSelectStore(response.data);
    });
  }, []);

  const handleChangeStore = (value: Store) => {
    setStore(value);
    onFilterChange(value);
  };

  return (
    <div className="filter-container base-card">
      <Select
        className="filter-select"
        isClearable={true}
        classNamePrefix="filter-container"
        options={selectStore}
        getOptionLabel={(store: Store) => store.name}
        getOptionValue={(store: Store) => String(store.id)}
        onChange={(value) => handleChangeStore(value as Store)}
      />
    </div>
  );
}

export default Filter;
