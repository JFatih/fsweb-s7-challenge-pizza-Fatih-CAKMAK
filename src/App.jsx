import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import OrderPizza from "./components/OrderPizza";
import Home from "./components/Home";
import SuccessPage from "./components/SuccessPage";
import pizzaData from "./components/PizzaData";

function App() {
  return (
    <div className="main-footer">
      <h1 className="footer-title">Teknolojik Yemekler</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/OrderPizza">
          <OrderPizza pizzaData={pizzaData} />
        </Route>
        <Route exact path="/SuccessPage">
          <SuccessPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
