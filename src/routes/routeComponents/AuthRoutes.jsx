import Login from "../../pages/Auth/Login";
import Signup from "../../pages/Auth/Signup";

const AuthRoutes = [
  {
    // Route for the signup page
    path: "signup",
    element: <Signup />,
  },
  {
    // Route for the login page
    path: "login",
    element: <Login />,
  },
];

export default AuthRoutes;
