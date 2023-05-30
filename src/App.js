import React from "react";
import Header from './components/layout/Header'
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <Meals />
    </React.Fragment>
  );
}

export default App;
