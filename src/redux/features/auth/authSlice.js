import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import app from "../../../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Initialize Firebase authentication
const auth = getAuth(app);

// Define initial state for authentication slice
const initialState = {
  user: null,
  loading: true,
  error: null,
};

// Async thunk action creator to get current user
export const getCurrentUser = createAsyncThunk(
  "authSlice/getCurrentUser",
  async () => {
    return new Promise((resolve, reject) => {
      // Check if user authentication state changes
      onAuthStateChanged(
        auth,
        (data) => {
          if (data) {
            // If user is authenticated, extract user information
            const user = {
              _id: data.uid,
              name: data.displayName,
              email: data.email,
              image: data.photoURL,
            };
            // Resolve with user object
            resolve(user);
          } else {
            // If user is not authenticated, resolve with null
            resolve(null);
          }
        },
        reject
      );
    });
  }
);

// Async thunk action creator for email signup
export const signupWithEmail = createAsyncThunk(
  "authSlice/signupWithEmail",
  async ({ name, email, password }) => {
    // Create user with email and password
    const data = await createUserWithEmailAndPassword(auth, email, password);

    // Update user profile with display name
    await updateProfile(auth.currentUser, { displayName: name });

    // Extract relevant user information
    const user = {
      _id: data.user.uid,
      name: name,
      email: email,
      image: data.user.photoURL,
    };

    return user;
  }
);

// Async thunk action creator for email login
export const loginWithEmail = createAsyncThunk(
  "authSlice/loginWithEmail",
  async ({ email, password }) => {
    // Sign in user with email and password
    const data = await signInWithEmailAndPassword(auth, email, password);

    // Extract relevant user information
    const user = {
      _id: data.user.uid,
      name: data.user.displayName,
      email: email,
      image: data.user.photoURL,
    };

    return user;
  }
);

// Async thunk action creator for Google sign-in
export const signInWithGoogle = createAsyncThunk(
  "authSlice/signInWithGoogle",
  async () => {
    // Initialize Google auth provider
    const provider = new GoogleAuthProvider();
    console.log(provider);
    // Sign in with Google popup
    const result = await signInWithPopup(auth, provider);

    console.log(result);

    // Extract relevant user information
    const user = {
      _id: result.user.uid,
      name: result.user.displayName,
      email: result.user.email,
      image: result.user.photoURL,
    };

    return user;
  }
);

// Async thunk action creator for logout
export const logout = createAsyncThunk("authSlice/logout", async () => {
  // Sign out user
  await signOut(auth);
});

// Create authentication slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  // Define extra reducers for async thunk actions
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
        state.error = action.error.message;
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
        state.error = action.error.message;
      })

      .addCase(signInWithGoogle.pending, (state) => {
        state.user = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(signInWithGoogle.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.error.message;
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
