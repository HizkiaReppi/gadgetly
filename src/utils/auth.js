export const authInitialState = {
  token: localStorage.getItem("token") || null,
  refreshToken: localStorage.getItem("refresh_token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  status: "idle",
  error: null,
};
