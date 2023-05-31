import classes from './Cart.module.css'
import Model from '../UI/Modal'

const Cart=(props)=>{
    return (
        <Model onClose={props.onClose}>
            <div className={classes['cart-items']}>
                <h3>Sushi</h3>
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>35.99 $</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onClose}>close</button>
                    <button className={classes.button}>order</button>
                </div>
            </div>
        </Model>
    )
}

export default Cart;