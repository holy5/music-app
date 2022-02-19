import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { MdHeadphones, MdOutlineFavoriteBorder } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsSoundwave } from "react-icons/bs";
import logo from "../../assets/img/logo.svg";

const Sidebar = () => {
  return (
    <div className="w-[286px] h-[calc(100vh-60px)] text-text bg-shimmerdark border-r-2 border-border inline-block fixed top-0">
      <div className="flex flex-col px-5 gap-y-[10px]">
        <img
          srcSet={logo}
          alt="logo"
          className="h-[40px] w-[156px] mt-5 mb-10"
        />
        <div className="flex flex-row items-center p-2 rounded gap-x-2 bg-cherryred">
          <AiOutlineHome className="text-xl" />
          <div className="text-lg font-bold">Home</div>
        </div>
        <div className="flex flex-row items-center p-2 rounded gap-x-2 ">
          <BiCategoryAlt className="text-xl" />
          <div className="text-lg font-bold">Browse</div>
        </div>
        <div className="flex flex-row items-center p-2 rounded gap-x-2 ">
          <MdOutlineFavoriteBorder className="text-xl" />
          <div className="text-lg font-bold">Favorite</div>
        </div>
        <div className="flex flex-row items-center p-2 rounded gap-x-2 ">
          <MdHeadphones className="text-xl" />
          <div className="text-lg font-bold">Library</div>
        </div>
        <div>
          <div className="flex justify-between mt-3">
            <h1 className="text-lg font-bold">Playlist</h1>
            <IoMdAddCircleOutline className="text-2xl" />
          </div>
          <div className="flex flex-col mt-3 gap-y-2">
            <div className="flex flex-row items-center justify-between text-cherryred">
              <div>this is abcxyz</div>
              <BsSoundwave className="text-2xl" />
            </div>
            <div>this is abcxyz</div>
            <div>this is abcxyz</div>
            <div>this is abcxyz</div>
            <div>this is abcxyz</div>
            <div>this is abcxyz</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
