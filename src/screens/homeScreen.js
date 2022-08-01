import React from "react";
import BeveragesCard from "../component/cards/beverages/beveragesCard";
import BurgerCard from "../component/cards/burger/burgerCard";
import DrinksCard from "../component/cards/drinks/drinksCard";
import PastaCard from "../component/cards/pasta/pastaCard";
import PizzaCard from "../component/cards/pizza/pizzaCard";
import SaladCard from "../component/cards/salad/saladCard";
import CategoriesRestaurant from "../component/categories/CategoriesRestaurant";
import Footer from "../component/footer/footer";
import HeaderRestaurant from "../component/header/headerRestaurant";
import NavigationComponent from "../component/navigation/navigationComponent";

export default function HomeScreen() {
  return (
    <div>
      <NavigationComponent />
      <HeaderRestaurant />
      <CategoriesRestaurant />
      {/* <PizzaCard /> */}
      <SaladCard />
      <PastaCard />
      <BurgerCard />
      <BeveragesCard />
      <DrinksCard />
      <Footer />
    </div>
  );
}
