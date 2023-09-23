import React from "react";
import { Link } from "react-router-dom";
import { Home } from "../pages/dashboard/Home";

export const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={""}> Home </Link>{" "}
        </li>
      </ul>
    </>
  );
};
