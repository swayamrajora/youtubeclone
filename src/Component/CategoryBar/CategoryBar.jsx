import React, { useState } from "react";
import "./CategoryBar.css";

const categories = [
  "All", "Music", "Disha Vakani", "Mr. Bean", "Mixes", "News",
  "Arijit Singh", "A. R. Rahman", "Shreya Ghoshal", "T-Series",
  "Software Engineering", "Live", "Indian pop music", "Mantras"
];

const CategoryBar = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="category-bar">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`category-button ${activeCategory === category ? "active" : ""}`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
