// components/Loader.js
import React from "react";
import { ClipLoader } from "react-spinners";

const LoaderComponent = () => {
  return (
    <section className="relative pt-28 container h-100vh bg-black bg-opacity-30 flex justify-center items-center z-20">
      <div className=" mx-auto border-red-50">
        <ClipLoader color="#36D7B7" size={150} />
      </div>
    </section>
  );
};

export default LoaderComponent;
