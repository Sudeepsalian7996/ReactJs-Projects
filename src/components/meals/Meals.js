import React from 'react'
import MealItem from "./MealItem";
import RestaurentSummary from "./RestaurentSummary";

const Meals=()=>{
    return (
        <React.Fragment>
            <RestaurentSummary />
            <MealItem />
        </React.Fragment>
    )
}
export default Meals;