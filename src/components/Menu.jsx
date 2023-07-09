import React, { useState, useEffect } from "react";
import { data } from "../food-data/foodData";

export default function Menu() {
  const [foods, setFoods] = useState(data);

  function filterType(category) {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  }

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  const menuButtonsCss =
    "text-orange-500 font-semibold border-orange-500 hover:bg-orange-500 hover:text-white duration-200";
  return (
    <section className="max-w-[1640px] mx-auto p-4">
      <div className="menu-header my-12">
        <h1 className="w-full my-6 text-orange-500 font-bold text-4xl md:text-6xl lg-text-7xl">
          Our Menu Musts
        </h1>
        <div className="filters-row flex flex-col gap-4 lg:flex-row justify-between">
          <div>
            <h3 className=" my-4 font-bold text-2xl">Filter Type</h3>
            <div className="flex gap-4">
              <button onClick={() => setFoods(data)} className={menuButtonsCss}>
                All
              </button>
              <button
                onClick={() => filterType("pizza")}
                className={menuButtonsCss}
              >
                Pizza
              </button>
              <button
                onClick={() => filterType("burger")}
                className={menuButtonsCss}
              >
                Burgers
              </button>
              <button
                onClick={() => filterType("salad")}
                className={menuButtonsCss}
              >
                Salads
              </button>
              <button
                onClick={() => filterType("chicken")}
                className={menuButtonsCss}
              >
                Chicken
              </button>
            </div>
          </div>
          <div>
            <h3 className="my-4 font-bold text-2xl">Filter Price</h3>
            <div className="flex gap-4">
              <button
                onClick={() => filterPrice("$")}
                className={menuButtonsCss}
              >
                $
              </button>
              <button
                onClick={() => filterPrice("$$")}
                className={menuButtonsCss}
              >
                $$
              </button>
              <button
                onClick={() => filterPrice("$$$")}
                className={menuButtonsCss}
              >
                $$$
              </button>
              <button
                onClick={() => filterPrice("$$$$")}
                className={menuButtonsCss}
              >
                $$$$
              </button>
              <button
                onClick={() => filterPrice("$$$$$")}
                className={menuButtonsCss}
              >
                $$$$$
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((item, index) => {
          return (
            <div
              key={index}
              className="shadow-lg rounded-b-lg cursor-pointer duration-300 hover:scale-[1.03]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full max-h-[280px] md:max-h-[300px] h-full object-cover rounded-t-lg"
              ></img>
              <div className="p-4 flex flex-row justify-between">
                <h3 className="font-bold text-xl">{item.name}</h3>
                <span className="bg-orange-600 font-bold text-white text-[15px] rounded-full py-1 px-3">
                  {item.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
