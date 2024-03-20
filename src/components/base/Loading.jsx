import React from "react";
import { MoonLoader } from "react-spinners";

const LoadingSpinner = ({ loading }) => {
  return (
    <div
      className={`${
        loading && "fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-20"
      } `}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        style={{ zIndex: 9999 }}
      >
        <MoonLoader color="black" loading={loading} size={40} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
