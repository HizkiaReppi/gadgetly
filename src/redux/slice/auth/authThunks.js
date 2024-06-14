import { useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { logout } from "./logoutSlice";

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { dispatch }) => {
    dispatch(logout());

    // Navigate after logging out
    const navigate = useNavigate();
    navigate("/");
  },
);
