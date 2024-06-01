import { useSelector } from "react-redux";

const useUser = () => {
  const { loading, user } = useSelector((state) => state.auth);
  return { user, isUserloading: loading };
};

export default useUser;
