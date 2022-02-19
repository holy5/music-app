import React from "react";

const CategoryItem = () => {
  return (
    <div className="relative ">
      <img
        src="https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-4k-n%C3%BAi-non-h%C3%B9ng-v%C4%A9-scaled.jpg"
        alt=""
        className="w-[210px] h-[92px] rounded-[4px] -z-[1] brightness-75"
      />
      <div className="absolute top-[50%] left-[50%] text-2xl font-bold text-text translate-x-[-50%] translate-y-[-50%]">
        Pop
      </div>
    </div>
  );
};

export default CategoryItem;
