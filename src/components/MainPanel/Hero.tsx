import React from "react";
import { FiHeart } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="text-text">
      <div className="relative flex justify-center">
        <img
          src="https://images6.alphacoders.com/104/thumb-1920-1041418.jpg"
          alt=""
          className="w-[750px] h-[350px] brightness-75 object-cover rounded-md "
        />
        <div className="absolute inset-0 left-[30px] right-[30px] rounded shadow-vignette z-[1]"></div>
        <div className="absolute bottom-[20px] right-[60px] flex flex-col items-end z-[2]">
          <h1 className="text-sm font-normal uppercase">Featured Songs</h1>
          <div className="mt-6 text-lg font-normal">Post Malone</div>
          <div className="text-4xl font-bold">Circles</div>
          <div className="flex flex-row items-center mt-6 gap-x-5">
            <FiHeart className="text-2xl !text-border" />
            <button className="py-2 text-base rounded px-7 bg-cherryred">
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
