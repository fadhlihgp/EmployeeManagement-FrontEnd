import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export function Register() {
  const navigate = useNavigate();

  const { state, handleFunction } = useContext(AuthContext);
  const { input, setInput } = state;
  const { handleInput, handleRegister } = handleFunction;

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["Company Info", "Account Info"];

  const handleNext = () => {
    if (!input.companyName || !input.companyPhone || !input.companyAddress || !input.companyEmail) {
      alert("input tidak boleh ada yang kosong");
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center bg-blue-200 justify-center">
      <div className="w-1/2 bg-white p-6 rounded-lg shadow-md w-1/2 ">
        <button
          type="button"
          onClick={() => {
            navigate("/login");
          }}
          className="text-red-600 dark:text-red-500 hover:text-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Kembali ke halaman Login
        </button>
        {activeStep === 0 && (
          <ol class="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
            <li class="flex items-center text-blue-600 dark:text-blue-500">
              <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                1
              </span>
              Perusahaan/Toko/Usaha <span class="hidden sm:inline-flex sm:ml-2"></span>
              <svg
                class="w-3 h-3 ml-2 sm:ml-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 10">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m7 9 4-4-4-4M1 9l4-4-4-4"
                />
              </svg>
            </li>
            <li class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-black-500 rounded-full shrink-0 dark:border-gray-400">
                2
              </span>
              Akun <span class="hidden sm:inline-flex sm:ml-2">Pemilik</span>
            </li>
          </ol>
        )}
        {activeStep === 1 && (
          <ol class="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
            <li class="flex items-center text-gray-600 dark:text-gray-500">
              <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-600 rounded-full shrink-0 dark:border-gray-500">
                1
              </span>
              Perusahaan/Toko/Usaha <span class="hidden sm:inline-flex sm:ml-2"></span>
              <svg
                class="w-3 h-3 ml-2 sm:ml-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 10">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m7 9 4-4-4-4M1 9l4-4-4-4"
                />
              </svg>
            </li>
            <li class="flex items-center text-blue-600 dark:text-blue-500">
              <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-500 rounded-full shrink-0 dark:border-blue-400">
                2
              </span>
              Akun <span class="hidden sm:inline-flex sm:ml-2">Pemilik</span>
            </li>
          </ol>
        )}
        <form onSubmit={handleRegister}>
          {activeStep === 0 && (
            <div>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={input.companyName}
                    onChange={handleInput}
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nama Perusahaan."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="companyEmail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="text"
                    name="companyEmail"
                    id="companyEmail"
                    value={input.companyEmail}
                    onChange={handleInput}
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email Perusahaan"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="companyPhone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Telepon
                  </label>
                  <input
                    type="number"
                    name="companyPhone"
                    id="companyPhone"
                    value={input.companyPhone}
                    onChange={handleInput}
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Telepon Perusahaan"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="companyAddress"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Alamat
                  </label>
                  <input
                    type="text"
                    name="companyAddress"
                    id="companyAddress"
                    value={input.companyAddress}
                    onChange={handleInput}
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Alamat Perusahaan"
                    required
                  />
                </div>
                {/* Add more fields as needed */}
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Lanjut informasi akun
              </button>
            </div>
          )}
          {activeStep === 1 && (
            <div>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={input.fullName}
                    onChange={handleInput}
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nama Lengkap"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={input.username}
                    onChange={handleInput}
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={input.email}
                    onChange={handleInput}
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={input.password}
                    onChange={handleInput}
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Password"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Alamat
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={input.address}
                    onChange={handleInput}
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Alamat"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="passwordConfirm"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Konfirmasi Password
                  </label>
                  <input
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    value={input.passwordConfirm}
                    onChange={handleInput}
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Password"
                    required
                  />
                </div>
                {/* Add more fields as needed */}
              </div>
              <button
                type="button"
                onClick={handlePrev}
                className="text-blue-600 dark:text-blue-500 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Kembali Step sebelumnya
              </button>
              <button
                type="submit"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Daftar
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Register;
