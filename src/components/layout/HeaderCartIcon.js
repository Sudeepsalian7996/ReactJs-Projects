import { useContext } from "react";
import cartContext from "../../store/cartContext";
import CartIcon from "../cart/CartIcon";
import classes from './HeaderCartIcon.module.css'

function HeaderCartIcon(props){
    const cartCtx=useContext(cartContext)
    let quantity=0;
    cartCtx.items.forEach((item)=>{
        quantity+=Number(item.quantity)
    })
    return (
        <button className={classes.button} onClick={props.onShow}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span  className={classes.badge}>
                {quantity}
            </span>
        </button>
    )
}
export default HeaderCartIcon;