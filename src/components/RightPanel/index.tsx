import React from "react";
import HorizontalMusicItem from "../MainPanel/HorizontalMusicItem";
import Category from "./Category";
import TopStream from "./TopStream";

const RightPanel = () => {
  return (
    <div className="h-[calc(100vh-60px)] bg-maindark fixed right-0 w-[calc(100vw-1144px)] py-5 text-text pr-[20px] overflow-y-scroll top-0 bottom-0">
      <TopStream />
      <Category />
    </div>
  );
};

export default RightPanel;
