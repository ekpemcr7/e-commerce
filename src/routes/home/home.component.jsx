import React from "react";
import CategoryContainer from "../../components/category-menu/Category-menu";
import { categories } from "../../components/category-menu/Categories";

const Home = () => {
  return (
    <div>
      <CategoryContainer categories={categories} />
    </div>
  );
};

export default Home;
