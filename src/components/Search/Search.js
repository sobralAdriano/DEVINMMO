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
        placeholder="Pesquisar Games"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
  );
};

export default GamesSearch;