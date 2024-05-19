import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authInitialState } from "../../../utils/auth";
import axios from "../../../utils/axios";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/register", userData);
      const data = response.data;

      if (data.status === true) {
        return data.data;
      } else {
        if (Array.isArray(data.data)) {
          return rejectWithValue(data.data);
        } else {
          return rejectWithValue(data.data.error);
        }
      }
    } catch (error) {
      if (Array.isArray(error.response.data.data)) {
        return rejectWithValue(error.response.data.data);
      } else {
        return rejectWithValue(error.response.data.error);
      }
    }
  },
);

const registerSlice = createSlice({
  name: "register",
  initialState: authInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.token = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.isAuthenticated = true;
        state.status = "succeeded";
        localStorage.setItem("token", state.token);
        localStorage.setItem("refresh_token", state.refreshToken);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export default registerSlice.reducer;
