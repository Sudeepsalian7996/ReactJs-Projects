import React from 'react'
import classes from './MealEachItem.module.css'

const MealEachItem=(props)=>{
    return(
        <React.Fragment>
            {props.meals.map((meal)=>{
                return(
                    <li className={classes.meal}>
                       <div>
                        <h3>{meal.name}</h3>
                        <div className={classes.description}>{meal.description}</div>
                        <div className={classes.price}>${meal.price}</div>
                        </div>
                    </li>
                )
            })}
        </React.Fragment>
    )
}
export default MealEachItem;