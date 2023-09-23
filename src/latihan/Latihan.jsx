import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";

function Latihan() {

  const { state, handleFunction } = useContext(GlobalContext);
  const { input, setInput, data, setData, fetchStatus, setFetchStatus, currentId, setCurrentId } = state;
  const { handleChange, handleSubmit, handleDelete, handleEdit, handleReset, fetchData } = handleFunction;

  useEffect(() => {
    if (fetchStatus == true) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <div>
      {/*<Login />*/}
      <h2>Data</h2>
      {data == null && <p>Loading...</p>}
      {data != null &&
        data.map((d) => {
          return (
            <div key={d.id} class="mb-3">
              {d.firstName} {d.lastName}{" "}
              <button
                value={d.id}
                onClick={handleEdit}
                class="flex-shrink-0 px-2 py-1 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                Edit
              </button>{" "}
              <button
                value={d.id}
                onClick={handleDelete}
                class="flex-shrink-0 px-2 py-1 text-base font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Latihan;
