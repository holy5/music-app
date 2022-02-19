import React from "react";
import HorizontalMusicItem from "./HorizontalMusicItem";

const RecentPlay = () => {
  return (
    <div className="px-[34px] text-text mt-3">
      <div className="mb-5 text-lg font-bold">Recently Played</div>
      <div className="flex flex-col gap-y-4">
        <HorizontalMusicItem />
        <HorizontalMusicItem />
        <HorizontalMusicItem />
        <HorizontalMusicItem />
        <HorizontalMusicItem />
      </div>
    </div>
  );
};

export default RecentPlay;
