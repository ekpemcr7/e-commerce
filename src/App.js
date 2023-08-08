import React from "react";
import CategoryContainer from "./components/category-menu/Category-menu";
import { categories } from "./Categories";

const App = () => {
  return (
    <>
      <CategoryContainer categories={categories} />
    </>
  );
};

export default App;
