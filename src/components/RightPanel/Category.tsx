import React from "react";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <div className="mt-5 overflow-auto">
      <h1 className="mb-3 text-lg font-bold">Categories</h1>
      <div className="grid grid-cols-2 gap-2 overflow-auto">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
};

export default Category;
