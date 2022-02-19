import React from "react";
import MusicBigItem from "./MusicBigItem";

const NewRelease = () => {
  return (
    <div className="text-text px-[34px]">
      <h1 className="mb-4 text-lg font-bold">New Release</h1>
      <div className="flex flex-row gap-x-5">
        <MusicBigItem />
        <MusicBigItem />
        <MusicBigItem />
        <MusicBigItem />
      </div>
    </div>
  );
};

export default NewRelease;
