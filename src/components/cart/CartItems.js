import React,{useContext} from "react";
import cartContext from "../../store/cartContext";
import Cart from "./Cart";

const CartItem=()=>{
    const cartCntxt=useContext(cartContext)
    let cartItem=cartCntxt.items.map((item)=><Cart meals={item}/>)
    return(
     {cartItem}   
    )
}
export default CartItem;