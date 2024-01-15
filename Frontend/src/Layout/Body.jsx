import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Social from "./Social";
import { Outlet } from "react-router-dom";
import pocketBase from "../api/pocketbase";
import "./Layout.css";

const Body = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesMapping, setCategoriesMapping] = useState({});
  const [products, setProducts] = useState([]);
  const [productsMapping, setProductsMapping] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const pb = await pocketBase.getPbConn();
        const categories = await pb.collection("Categories").getFullList({
          sort: "-created",
        });
        const productsData = await pb.collection("Products").getFullList({
          sort: "-created",
        });
        const products = [];
        // await Promise.all(
        //   );
        productsData.forEach((el) => {
          const Photos = [];
          el.Photos.forEach((pic) => {
            const url = pb.files.getUrl(el, pic);
            Photos.push(url);
          });
          // await Promise.all(
          // );
          products.push({
            ...el,
            Photos,
          });
        });
        const categoriesMapping = {};
        const productsMapping = {};
        products.forEach((product) => {
          product.Categories.forEach((category) => {
            categoriesMapping[category] = [
              ...(categoriesMapping[category] || []),
              product,
            ];
          });
        });
        products.forEach((product) => (productsMapping[product.id] = product));
        console.log({ categories });
        console.log({ categoriesMapping });
        console.log({ products });
        console.log({ productsMapping });
        setCategories(
          categories.map((el) => {
            return {
              name: el.name,
              id: el.id,
              img: pb.files.getUrl(el, el.img),
            };
          })
        );
        setCategoriesMapping(categoriesMapping);
        setProducts(products);
        setProductsMapping(productsMapping);
      } catch (error) {
        if (error.message === "Token expired") {
          await pocketBase.refreshToken();

          // Reattempt to fetch records after refreshing the token
          getData();
        } else {
          throw error;
        }
      }
    };
    getData();
  }, []);
  return (
    <>
      <Header categories={categories} />
      <Social />
      <Outlet
        context={{ categories, categoriesMapping, products, productsMapping }}
      />
      <Footer />
    </>
  );
};

export default Body;
