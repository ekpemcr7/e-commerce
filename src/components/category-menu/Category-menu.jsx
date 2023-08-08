import React from "react";
import CategoryItem from "../category-menu-item/Category-item";
import "./category-menu.styles.scss";

const CategoryContainer = ({ categories }) => {
  return (
    <div>
      <div className="categories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;
