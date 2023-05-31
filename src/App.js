import React,{useState} from "react";
import Header from './components/layout/Header'
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";

function App() {
  const [cartVisibility,setCartVisibility]=useState(false)

  const showHandler=()=>{
    setCartVisibility(true)
  }

  const hideCartHandler=()=>{
    setCartVisibility(false)
  }

  return (
    <React.Fragment>
     {cartVisibility && <Cart onClose={hideCartHandler} />}
      <Header onShow={showHandler}/>
      <Meals />
    </React.Fragment>
  );
}

export default App;
