import CartIcon from "../cart/CartIcon";
import classes from './HeaderCartIcon.module.css'

function HeaderCartIcon(props){
    return (
        <button className={classes.button} onClick={props.onShow}>
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