import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  var baseUrl = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  // ============== State ====================
  const [input, setInput] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    address: "",
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    companyAddress: "",
  });

  // ============== Function ===================
  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    let { username, password } = input;

    axios
      .post(baseUrl + "/auth/login", { username, password })
      .then((res) => {
        let token = res.data.data.token;
        Cookies.set("token", token, { expires: 1 });
        alert(res.data.message);
        navigate("/home");
      })

      .catch((error) => {
        // console.log(error.response.data.message);
        alert(error.response.data.message);
      });

    setInput({
      fullName: "",
      username: "",
      email: "",
      password: "",
      address: "",
      companyName: "",
      companyEmail: "",
      companyPhone: "",
      companyAddress: "",
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    let {
      fullName,
      username,
      email,
      password,
      address,
      companyName,
      companyEmail,
      companyPhone,
      companyAddress,
      passwordConfirm,
    } = input;
    if (password !== passwordConfirm) {
      alert("Konfirmasi password harus sama");
      return;
    }

    axios
      .post(baseUrl + "/auth/register", {
        fullName,
        username,
        email,
        password,
        address,
        companyName,
        companyEmail,
        companyPhone,
        companyAddress,
      })
      .then((res) => {
        alert(res.data.message);
        navigate("/login");
        setInput({
          fullName: "",
          username: "",
          email: "",
          password: "",
          passwordConfirm: "",
          address: "",
          companyName: "",
          companyEmail: "",
          companyPhone: "",
          companyAddress: "",
        });
      })

      .catch((error) => {
        // console.log(error);
        alert(error.response.data.message);
      });
  };

  const handleReset = (event) => {
    event.preventDefault();
    setInput({
      fullName: "",
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      address: "",
      companyName: "",
      companyEmail: "",
      companyPhone: "",
      companyAddress: "",
    });
    navigate('/register')
  };
  let state = {
    input,
    setInput,
  };

  let handleFunction = {
    handleInput,
    handleLogin,
    handleRegister,
    handleReset
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        handleFunction,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
