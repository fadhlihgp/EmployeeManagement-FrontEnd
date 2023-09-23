import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Navigation } from "./../../latihan/Navigation";
export const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    navigate("/login");
  };

  return (
    <>
      <Navigation />
      <div>Ini Home</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
