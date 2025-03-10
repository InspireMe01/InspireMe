import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const bestProducts = products.filter((item) => item.bestseller);
      setBestSeller(bestProducts.slice(0, 5));
    } else {
      console.log("No products available");
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium delectus quos, vitae reiciendis repudiandae
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {bestSeller.length > 0 ? (
          bestSeller.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">No best sellers available</p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;