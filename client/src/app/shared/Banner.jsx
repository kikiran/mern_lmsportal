import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      <div className="flex-col gap-5 p-4 absolute top-10 left-10 w-96 h-48 rounded-md bg-white bg-opacity-100 shadow-lg flex items-start justify-start z-10">
        <p className="text-black text-3xl items-start font-bold">
          Learning for all
        </p>
        <p>
          Thousands of courses to help you succeed in your goals — at work and
          in life. Starting at ₹399. Ends today.
        </p>
      </div>
      <Image
        src="/images/main-banner.jpg"
        alt="main-banner"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
    </div>
  );
};

export default Banner;
