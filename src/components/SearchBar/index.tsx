import React from 'react';
import {
  Link,
} from 'react-router-dom';

// -- styles
import './styles.scss';

function SearchBar() {
  return (
    <div className="searchBar">
      <input type="text" name="search" placeholder="Pesquise por um veículo" />
      <button type="button">
        Cadastrar
      </button>
    </div>
  );
}

export default SearchBar;
