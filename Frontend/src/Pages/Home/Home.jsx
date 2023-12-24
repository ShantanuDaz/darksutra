import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { useOutletContext } from "react-router-dom";
import Casserole from "../../Components/Casserole/Casserole";
import Categories from "../../Components/Categories/Categories";
import ProductByCategory from "../../Components/ProductByCategory/ProductByCategory";

const casseroleList = [];
const Home = () => {
  const { categories, categoriesMapping } = useOutletContext();
  return (
    <>
      <Casserole list={casseroleList} />
      <Categories categories={categories} />
      <ProductByCategory
        categories={categories}
        categoriesMapping={categoriesMapping}
      />
    </>
  );
};

export default Home;
