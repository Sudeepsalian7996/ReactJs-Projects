import CartIcon from "../cart/CartIcon";
import classes from './HeaderCartIcon.module.css'

function HeaderCartIcon(){
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span  className={classes.badge}>
                3
            </span>
        </button>
    )
}
export default HeaderCartIcon;