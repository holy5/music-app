import React from "react";

const Playbar = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-shimmerdark h-[60px] border-t-2 border-border">
      <div className="flex items-center p-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImTlg2is-Ghw3qGK4Ky7vD5ulsCyptF-50A&usqp=CAU"
          alt=""
          className="object-cover w-10 rounded-[4px] aspect-square"
        />
      </div>
    </div>
  );
};

export default Playbar;
