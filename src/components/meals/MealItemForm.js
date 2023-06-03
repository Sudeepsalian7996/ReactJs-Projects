import React,{useContext} from "react";
import Input from "../UI/Input";
import classes from './MealItemForm.module.css'
import cartContext from '../../store/cartContext'

const MealItemForm=(props)=>{
    const cartCntxt=useContext(cartContext)
    const addToCartHandler=(e)=>{
        e.preventDefault()
        const quantity=document.getElementById('amount'+props.id).value
        cartCntxt.addItem({...props.item,quantity:quantity})
    }

    return(
        <form className={classes.form}>
            {console.log('inside return-->',cartCntxt)}
            <Input label='amount' input={{
                id:`amount`+props.id,
                type:"number",
                min:'1',
                max:'1000',
                defaultValue:1
            }}/>
            <button onClick={addToCartHandler}>+ Add</button>
        </form>
    )
}

export default MealItemForm;