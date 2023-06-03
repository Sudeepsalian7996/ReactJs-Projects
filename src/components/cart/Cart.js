import { useContext } from 'react';
import classes from './Cart.module.css'
import Model from '../UI/Modal'
import cartContext from "../../store/cartContext";


const Cart=(props)=>{
    const cartCntxt=useContext(cartContext)
    let cartItems=cartCntxt.items.map((meal)=>
        <li>Name:{meal.name} price: {meal.price}</li>)
    return (
        <Model onClose={props.onClose}>
            {cartItems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>70 $</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onClose}>close</button>
                    <button className={classes.button}>order</button>
                </div>
           
        </Model>
    )
}

export default Cart;