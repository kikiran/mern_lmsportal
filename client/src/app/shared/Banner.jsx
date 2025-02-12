import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      <div className="absolute top-0 left-0 w-96 h-48 bg-black bg-opacity-50 shadow-lg flex items-center justify-center z-1">
        <p className="text-blue-500 text-3xl">Welcome</p>
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
