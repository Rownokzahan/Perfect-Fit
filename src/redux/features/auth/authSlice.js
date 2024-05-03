import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import app from "../../../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const getCurrentUser = createAsyncThunk(
  "authSlice/getCurrentUser",
  async () => {
    const data = auth.currentUser;
    if (data) {
      const user = {
        _id: data.uid,
        name: data.displayName,
        email: data.email,
        image: data.photoURL,
        //role: "customer",
        //TODO: get role from database
      };
      return user;
    }
  }
);

export const signupWithEmail = createAsyncThunk(
  "authSlice/signupWithEmail",
  async ({ name, email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, { displayName: name }); // Update user name

    // Extract relevant user information
    const user = {
      _id: data.user.uid,
      name: name,
      email: email,
      image: data.user.photoURL,
      role: "customer",
    };

    return user;
  }
);

export const loginWithEmail = createAsyncThunk(
  "authSlice/loginWithEmail",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);

    // Extract relevant user information
    const user = {
      _id: data.user.uid,
      name: data.user.displayName,
      email: email,
      image: data.user.photoURL,
      //role: "customer",
      //TODO: get role from database
    };

    return user;
  }
);

export const logout = createAsyncThunk("authSlice/logout", async () => {
  await signOut(auth);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.user = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signupWithEmail.pending, (state) => {
        state.user = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(signupWithEmail.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(signupWithEmail.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.error.code;
      })
      .addCase(loginWithEmail.pending, (state) => {
        state.user = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithEmail.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginWithEmail.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.error.code;
      })
      .addCase(logout.pending, (state) => {
        state.user = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setUser, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
