import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalContext";
import Latihan from "../latihan/Latihan";
import Login from "./../pages/login/Login";
import LatihanForm from "../latihan/LatihanForm";
import { Home } from "../pages/dashboard/Home";
import Cookies from "js-cookie";
import { AuthProvider } from "../context/AuthContext";
import Register from "../pages/register/Register";

function RouteComponent() {
  const LoginRoute = (props) => {
    if (Cookies.get("token") === undefined) {
      return props.children;
    } else if (Cookies.get("token") !== undefined) {
      return <Navigate to={"/"} />;
    }
  };

  const DashboardRoute = (props) => {
    if (Cookies.get("token") === undefined) {
      return <Navigate to={"/login"} />;
    } else if (Cookies.get("token") !== undefined) {
      return props.children;
    }
  };
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route
            path=""
            element={
              <DashboardRoute>
                <Home />
              </DashboardRoute>
            }
          />
          <Route
            path="/home"
            element={
              <DashboardRoute>
                <Home />
              </DashboardRoute>
            }
          />
        </Routes>
      </GlobalProvider>

      <AuthProvider>
        <Routes>
          <Route
            path="/login"
            element={
              <LoginRoute>
                <Login />
              </LoginRoute>
            }
          />

          <Route
            path="/register"
            element={
              <LoginRoute>
                <Register />
              </LoginRoute>
            }></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default RouteComponent;
