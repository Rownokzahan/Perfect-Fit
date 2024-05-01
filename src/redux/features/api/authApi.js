import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { setUser, setLoading, setError } from "../auth/authSlice";

const auth = getAuth(app);

export const signup = async (name, email, password, dispatch) => {
  try {
    dispatch(setLoading(true)); // Set loading state to true
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, { displayName: name }); // Update user name

    // Extract relevant user information
    const user = {
      _id: userCredential.user.uid,
      name: name,
      email: email,
      image: userCredential.user.photoURL,
      role: "customer",
    };

    dispatch(setUser(user));
    dispatch(setLoading(false)); // Set loading state to false
    dispatch(setError(null)); // Reset error state

    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    dispatch(setError(error.message)); // Dispatch setError action with the error message
    dispatch(setLoading(false)); // Set loading state to false
  }
};

export const loginWithEmail = async (email, password, dispatch) => {
  try {
    dispatch(setLoading(true)); // Set loading state to true
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch(setUser(userCredential.user));
    dispatch(setLoading(false)); // Set loading state to false
    dispatch(setError(null)); // Reset error state
  } catch (error) {
    console.error("Error signing in with email:", error);
    dispatch(setError(error.message)); // Dispatch setError action with the error message
    dispatch(setLoading(false)); // Set loading state to false
  }
};

export const loginWithGoogle = async (dispatch) => {
  try {
    dispatch(setLoading(true)); // Set loading state to true
    const userCredential = await signInWithPopup(
      auth,
      new GoogleAuthProvider()
    );
    dispatch(setUser(userCredential.user));
    dispatch(setLoading(false)); // Set loading state to false
    dispatch(setError(null)); // Reset error state
  } catch (error) {
    console.error("Error signing in with Google:", error);
    dispatch(setError(error.message)); // Dispatch setError action with the error message
    dispatch(setLoading(false)); // Set loading state to false
  }
};

export const logout = async (dispatch) => {
  try {
    dispatch(setLoading(true)); // Set loading state to true
    await auth.signOut();
    dispatch(setUser(null));
    dispatch(setError(null)); // Reset error state
    dispatch(setLoading(false)); // Set loading state to false
  } catch (error) {
    console.error("Error signing out:", error);
    dispatch(setError(error.message)); // Dispatch setError action with the error message
    dispatch(setLoading(false)); // Set loading state to false
  }
};

export const initAuth = (dispatch) => {
  try {
    auth.onAuthStateChanged((user) => {
      dispatch(setUser(user)); // Dispatch setUser action
      dispatch(setLoading(false)); // Dispatch setLoading action
      dispatch(setError(null)); // Reset error state
    });
  } catch (error) {
    console.error("Error initializing auth:", error);
    dispatch(setError(error.message)); // Dispatch setError action with the error message
  }
};
