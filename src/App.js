import React,{useState} from "react";
import Header from './components/layout/Header'
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisibility,setCartVisibility]=useState(false)

  const showHandler=()=>{
    setCartVisibility(true)
  }

  const hideCartHandler=()=>{
    setCartVisibility(false)
  }

  return (
    <CartProvider>
     {cartVisibility && <Cart onClose={hideCartHandler} />}
      <Header onShow={showHandler}/>
      <Meals />
      </CartProvider>
  );
}

export default App;
