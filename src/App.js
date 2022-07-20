import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderRestaurant from './component/header/headerRestaurant';
import CategoriesRestaurant from './component/categories/CategoriesRestaurant';
import NavigationComponent from './component/navigation/navigationComponent';
import SaladCard from './component/cards/salad/saladCard';
import PizzaCard from './component/cards/pizza/pizzaCard';
import PastaCard from './component/cards/pasta/pastaCard';
import BurgerCard from './component/cards/burger/burgerCard';
import BeveragesCard from './component/cards/beverages/beveragesCard';
import DrinksCard from './component/cards/drinks/drinksCard';
import ModalCard from './component/cards/modal/modalCard';
import Footer from './component/footer/footer';


function App() {
  return (
    <div className="App">
        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
        <NavigationComponent/>
      <HeaderRestaurant/>
      
      <CategoriesRestaurant/>
      <SaladCard/>
      <PizzaCard/>
      <PastaCard/>
      <BurgerCard/>
      <BeveragesCard/>
      <DrinksCard/>
      <Footer/>
      
      
      
    </div>
    </div>
  );
}

export default App;
