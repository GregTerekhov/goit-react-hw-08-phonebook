import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from 'store/auth/authOperations';
import { authSelectors } from 'store/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.selectLoggedIn);
  const user = useSelector(authSelectors.selectUser);
  const isRefreshing = useSelector(authSelectors.selectFetchingCurrent);

  const dispatch = useDispatch();

  const fetchCurrentUser = useCallback(
    () => dispatch(authOperations.fetchCurrentUser()),
    [dispatch]
  );
  const register = (name, email, password) =>
    dispatch(authOperations.register(name, email, password));
  const logIn = (email, password) =>
    dispatch(authOperations.logIn(email, password));
  const logOut = () => dispatch(authOperations.logOut());

  return {
    isLoggedIn,
    user,
    isRefreshing,
    fetchCurrentUser,
    register,
    logIn,
    logOut,
  };
};
