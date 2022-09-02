import './styles.css';
import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import { Store } from '../../types';
import { makeRequest } from '../../utils/requests';

type Props = {
  onFilterChange: (storeFilter: Store) => void;
};

function Filter({ onFilterChange }: Props) {
  const [store, setStore] = useState<Store>({ id: 0, name: '' });
  const [storesList, setStoresList] = useState<Store[]>([]);

  useEffect(() => {
    makeRequest.get<Store[]>('/stores').then((response) => {
      setStoresList(response.data);
    });
  }, []);

  const handleChangeStore = (value: Store) => {
    if (value == null) {
      //after clearing filter, display total values.
      value = { id: 0, name: '' };
    }
    setStore(value);
    onFilterChange(value);
  };

  return (
    <div className="filter-container base-card">
      <Select
        className="filter-select"
        placeholder="Selecione a loja..."
        isClearable={true}
        classNamePrefix="filter-container"
        options={storesList}
        getOptionLabel={(store: Store) => store.name}
        getOptionValue={(store: Store) => String(store.id)}
        onChange={(value) => handleChangeStore(value as Store)}
      />
    </div>
  );
}

export default Filter;
