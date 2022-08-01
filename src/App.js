import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  Link,
  Routes,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Myorders from "./component/Orders/myOrders";
import HomeScreen from "./screens/homeScreen";

function App() {
  return (
    <div className="App">
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        tabindex="0"
      >
         <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/orders" element={<Myorders />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
