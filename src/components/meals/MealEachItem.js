import React from 'react'
import MealItemForm from './MealItemForm'
import classes from './MealEachItem.module.css'

const MealEachItem=(props)=>{
    return(
        <React.Fragment> 
                    <li className={classes.meal}>
                       <div>
                        <h3>{props.meals.name}</h3>
                        <div className={classes.description}>{props.meals.description}</div>
                        <div className={classes.price}>${props.meals.price}</div>
                        </div>
                        <div>
                            <MealItemForm />
                        </div>
                    </li>    
        </React.Fragment>
    )
}
export default MealEachItem;