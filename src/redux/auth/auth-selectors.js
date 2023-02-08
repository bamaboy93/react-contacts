export const getIsLoggedIn = (state) => state.auth.isLoggedIn;

export const getUser = (state) => state.auth.user.name;

export const getIsRefreshCurrent = (state) => state.auth.isRefreshCurrentUser;
