import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import OrderPizza from "./components/OrderPizza";
import Home from "./components/Home";
import SuccessPage from "./components/SuccessPage";
import pizzaData from "./components/PizzaData";
import { useState } from "react";

const initialValues = {
  pizzaAdı: "",
  boyutSec: "",
  hamurKalınlıgı: "",
  ekMalzemeler: [],
  adı: "",
  soyadı: "",
  yorum: "",
  adet: "",
  secimler: 0,
  toplam: 0,
};

function App() {
  const [orderForm, setOrderForm] = useState(initialValues);
  return (
    <div className="main-footer">
      <h1 className="footer-title">Teknolojik Yemekler</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/OrderPizza">
          <OrderPizza
            pizzaData={pizzaData}
            setOrderForm={setOrderForm}
            orderForm={orderForm}
          />
        </Route>
        <Route exact path="/SuccessPage">
          <SuccessPage orderForm={orderForm} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
