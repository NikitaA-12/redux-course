import React from 'react';
import { useSelector } from 'react-redux';

const UseFavorites = () => {
  const { favorites } = useSelector((state) => state);

  return { favorites };
};

export default UseFavorites;
