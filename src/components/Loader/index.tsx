// components/Loader.js
import React from "react";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center z-20">
      <div className="loader block mx-auto border-red-50">
        <ClipLoader color="#36D7B7" size={150} />
      </div>
    </div>
  );
};

export default Loader;
