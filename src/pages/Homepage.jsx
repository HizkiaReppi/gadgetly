import { useDispatch } from "react-redux";
import { logout } from "../redux/slice/auth/logoutSlice";
import Button from "../components/atoms/Button";

const Homepage = () => {
  const dispatch = useDispatch();

  // const token = localStorage.getItem("token");

  const handleLogout = () => {
    dispatch(logout());
  };

  // if (!token) {
  //   window.location.href = "/auth/login";
  // }

  return (
    <div>
      <h1>Homepage</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Homepage;
