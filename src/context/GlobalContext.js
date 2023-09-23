import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Inisialisasi create context
export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const baseUrl = "https://localhost:7070/api/customers";
  const navigate = useNavigate();

  // ================ State =========================
  const [data, setData] = useState(null);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    homeAddress: "",
  });

  // Indikator
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);

  // ======================= Handle Function ======================
  const handleChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let { firstName, lastName, email, homeAddress } = input;

    if (currentId == -1) {
      axios
        .post(baseUrl, { firstName, lastName, email, homeAddress })
        .then((res) => {
          setFetchStatus(true);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      axios
        .put(`${baseUrl}/${currentId}`, { firstName, lastName, email, homeAddress })
        .then((res) => {
          setFetchStatus(true);
        })
        .catch((error) => {
          alert(error.message);
        });
    }

    setInput({
      firstName: "",
      lastName: "",
      email: "",
      homeAddress: "",
    });
    setCurrentId(-1);
    navigate("/latihan");
  };

  const handleDelete = (event) => {
    event.preventDefault();

    var idData = event.target.value;
    axios
      .delete(`${baseUrl}/${idData}`)
      .then((res) => {
        setFetchStatus(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleEdit = (event) => {
    var idData = event.target.value;
    setCurrentId(idData);
    navigate(`/edit/${idData}`)
  };

  const handleReset = () => {
    setInput({
      firstName: "",
      lastName: "",
      email: "",
      homeAddress: "",
    });
    setCurrentId(-1);
  };

  const fetchData = () => {
    axios
      .get(baseUrl)
      .then((res) => {
        var result = res.data;
        console.log(result);
        setData(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // set
  let state = {
    data,
    setData,
    input,
    setInput,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
  };

  // function
  let handleFunction = {
    handleChange,
    handleSubmit,
    handleDelete,
    handleEdit,
    handleReset,
    fetchData,
  };
  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
