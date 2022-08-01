import React, { useEffect, useState } from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";

import axios from "../../Axios";
import AOS from "aos";
import "aos/dist/aos.css";

import Card from "react-bootstrap/Card";
import ProductDetails from "../../details/productDetails";

import PizzaList from "./pizzaList";
export default function PizzaCard() {
  const [pizzas, setPizza] = useState([]);
  

  const fetchFoodItem = async () => {
    const data = await fetch(`http://qrorder.co.in/Jarjeer/public/api/alldata`);
    console.log(data);

    const jsonData = await data.json();
    // setPizza(jsonData);

    setPizza(jsonData.data);
    
  };

  useEffect(() => {
    fetchFoodItem();
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {pizzas
        ? pizzas.map((pizza, index) => {
            return (
              <>
             
                {pizza.subcategory.length > 0 ? (
                  <PizzaList pizza={pizza} />
                ) : (
                  ""
                )}
              </>
            );

           
          })
        : ""}
    </>
  );
}
