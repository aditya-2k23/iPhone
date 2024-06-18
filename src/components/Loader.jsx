import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vh] h-[10vh] rounded-full">
          <h1 className="text-gray text-3xl mb-5 font-medium">Loading...</h1>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
