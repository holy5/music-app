import React from "react";
import Hero from "./Hero";
import NewRelease from "./NewRelease";
import RecentPlay from "./RecentPlay";

const MainPanel = () => {
  return (
    <div className="w-[850px] h-[calc(100vh-60px)] gap-y-5 left-[286px] top-0 bottom-0 absolute py-5 px-4 bg-maindark flex flex-col overflow-y-scroll">
      <Hero />
      <NewRelease />
      <RecentPlay />
    </div>
  );
};

export default MainPanel;
