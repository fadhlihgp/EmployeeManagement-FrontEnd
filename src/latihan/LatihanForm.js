import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";

function LatihanForm() {
  const baseUrl = "https://localhost:7070/api/customers";
  const { IdData } = useParams()

  const { state, handleFunction } = useContext(GlobalContext);
  const { input, setInput, data, setData, fetchStatus, setFetchStatus, currentId, setCurrentId } = state;
  const { handleChange, handleSubmit, handleDelete, handleEdit, handleReset, fetchData } = handleFunction;

  useEffect(() => {
    if (IdData != undefined) {
      axios
      .get(`${baseUrl}/${IdData}`)
      .then((res) => {
        var result = res.data;
        setInput({
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          homeAddress: result.homeAddress,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <div>
      <div class="mt-10">
        <h1>Input Data</h1>
        <form
          class="flex flex-col justify-center space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0"
          onSubmit={handleSubmit}>
          <div class=" relative ">
            <input
              type="text"
              name="firstName"
              value={input.firstName}
              onChange={handleChange}
              id='"form-subscribe-Subscribe'
              class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="First Name"
            />
          </div>
          <div class="relative">
            <input
              type="text"
              name="lastName"
              value={input.lastName}
              onChange={handleChange}
              id='"form-subscribe-Subscribe'
              class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Last Name"
            />
          </div>
          <div class="relative">
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={handleChange}
              id='"form-subscribe-Subscribe'
              class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Email"
            />
          </div>
          <div class="relative">
            <input
              type="text"
              name="homeAddress"
              value={input.homeAddress}
              onChange={handleChange}
              id='"form-subscribe-Subscribe'
              class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="homeAddress"
            />
          </div>
          <button
            class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="submit">
            {currentId === -1 ? "Create" : "Edit"}
          </button>
          <button
            onClick={handleReset}
            type="reset"
            class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default LatihanForm;
