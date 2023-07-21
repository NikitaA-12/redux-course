import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store/favorites/favorites.slice';
import * as userActions from '../store/user/user.actions';

const rootActions = {
  ...actions,
  ...userActions,
};

const UseActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export default UseActions;
