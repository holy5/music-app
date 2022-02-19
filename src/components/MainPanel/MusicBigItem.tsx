import React from "react";

const MusicBigItem = () => {
  return (
    <div className="flex flex-col">
      <img
        src="https://wallpaperaccess.com/full/2159510.jpg"
        alt=""
        className="mb-2 aspect-square w-[170px] object-cover rounded"
      />
      <div className="text-base">Red (Taylor's Version)</div>
      <div className="text-sm text-dimwhite">Taylor Swift</div>
    </div>
  );
};

export default MusicBigItem;
