import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import PromotionList from '../List/List';
import './Search.css';

const GamesSearch = () => {
    const [search, setSearch] = useState('');

  useEffect(() => {
  useListedGames();
  }, [search]);

  return (
    <input
        type="search"
        className="promotion-search__input"
        placeholder="Buscar"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <PromotionList promotions={promotions} loading={!promotions.length} />
    </div>
  );
};

export default GamesSearch;