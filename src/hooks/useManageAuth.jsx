import { useCallback } from "react";
import {
  useCreateUserMutation,
} from "../redux/features/api/userApi";
import { useDispatch, useSelector } from "react-redux";
import {
  loginWithEmail,
  setError,
  signInWithGoogle,
  signupWithEmail,
} from "../redux/features/auth/authSlice";

const useManageAuth = () => {
  const { loading, error } = useSelector((state) => state.auth);

  const [saveUserToDatabase] = useCreateUserMutation();
  const dispatch = useDispatch();

  const handleSaveUserToDB = useCallback(
    async (user, onSuccess) => {
      // Save user to database
      saveUserToDatabase(user)
        .unwrap()
        .then(() => {
          onSuccess();
        })
        .catch((error) => {
          console.error("Database save rejected", error);
          dispatch(setError("Something went wrong."));
        });
    },
    [dispatch, saveUserToDatabase]
  );

  const createUserWithEmail = useCallback(
    async (name, email, password, onSuccess) => {
      // Signup user
      dispatch(signupWithEmail({ name, email, password }))
        .unwrap()
        .then((user) => {
          console.log(user);
          handleSaveUserToDB(user, onSuccess);
        });
    },
    [dispatch, handleSaveUserToDB]
  );

  const emailLogin = useCallback(
    async (email, password, onSuccess) => {
      dispatch(loginWithEmail({ email, password }))
        .unwrap()
        .then(() => {
          onSuccess();
        });
    },
    [dispatch]
  );

  const loginWithGmail = useCallback(
    async (onSuccess) => {
      dispatch(signInWithGoogle())
        .unwrap()
        .then((user) => {
          handleSaveUserToDB(user, onSuccess);
        })
        .catch((error) => {
          console.error("Rejected sign in with Gmail", error);
          dispatch(setError("Failed to sign in with Gmail"));
        });
    },
    [dispatch, handleSaveUserToDB]
  );


  return {
    createUserWithEmail,
    emailLogin,
    loginWithGmail,
    loading,
    error,
  };
};

export default useManageAuth;
