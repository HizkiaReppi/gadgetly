import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/login", userData);
      const data = response.data;
      console.log(data);
      if (data.status === true) {
        return data.data;
      } else {
        if (Array.isArray(data.data)) {
          return rejectWithValue(data.data);
        } else {
          return rejectWithValue(data.error);
        }
      }
    } catch (error) {
      if (Array.isArray(error.response.data.data)) {
        console.log(error.response.data.data);
        return rejectWithValue(error.response.data.data);
      } else {
        console.log(error.response.data.error);
        return rejectWithValue(error.response.data.error);
      }
    }
  },
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: localStorage.getItem("token") || null,
    refreshToken: localStorage.getItem("refresh_token") || null,
    isAuthenticated: !!localStorage.getItem("token"),
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.isAuthenticated = true;
        state.status = "succeeded";
        localStorage.setItem("token", state.token);
        localStorage.setItem("refresh_token", state.refreshToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
