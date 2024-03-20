import React from "react";

const Banner = () => {
  return (
    <div className="flex h-screen bg-primary-purple py-[120px] pr-[120px] pl-[120px]">
      <div className="relative bg-[#FFFFFF40] w-full text-white p-14">
        <div className="font-semibold w-96 text-[48px]">
          <p className="-mb-5">Lorem ipsum</p>
          <p className="-mb-5">dolor si</p>
          <p className="-mb-5">amet</p>
          <p className="text-primary-grey">consectetur</p>
        </div>
        <div className="text-primary-grey mt-4 w-[22rem]">
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <p>adipiscing elit, sed do eiusmod tempor</p>
          <p>incididunt ut labore et dolore magna</p>
          <p>aliqua.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
