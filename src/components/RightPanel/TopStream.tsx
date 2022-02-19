import React from "react";
import HorizontalMusicItem from "../MainPanel/HorizontalMusicItem";

const TopStream = () => {
  return (
    <>
      <div className="bg-shimmerdark2 p-[14px] rounded-lg ">
        <h1 className="text-lg font-bold">Top Streams</h1>
        <div className="flex flex-col mt-4 overflow-auto gap-y-3 max-h-[350px] px-[6px]">
          <HorizontalMusicItem width="120" marquee={true} />
          <HorizontalMusicItem width="120" marquee={true} />
          <HorizontalMusicItem width="120" marquee={true} />
          <HorizontalMusicItem width="120" marquee={true} />
          <HorizontalMusicItem width="120" marquee={true} />
          <HorizontalMusicItem width="120" marquee={true} />
          <HorizontalMusicItem width="120" marquee={true} />
          <HorizontalMusicItem width="120" marquee={true} />
          <HorizontalMusicItem width="120" marquee={true} />
        </div>
      </div>
    </>
  );
};

export default TopStream;
