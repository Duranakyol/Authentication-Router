import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
} from "firebase/auth";
import { auth } from "../config/firebase";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateCurrentUser(auth, { displayName: name });
    } catch (e) {
      return rejectWithValue(e.code);
    }
  }
);

export const { changeName, changeEmail, changePassword } = authSlice.actions;

export default authSlice.reducer;
