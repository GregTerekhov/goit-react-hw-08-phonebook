const selectLoggedIn = state => state.auth.isLoggedIn;
const selectUser = state => state.auth.user;
const selectFetchingCurrent = state => state.auth.selectFetchingCurrent;

export const authSelectors = {
  selectLoggedIn,
  selectUser,
  selectFetchingCurrent,
};
