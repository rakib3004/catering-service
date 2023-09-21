import React from 'react'
import FoodTable from '../components/FoodTable'

const FoodList = () => {
    const foods = [
        {
            name: "Fried Rice with curry",
            code: "#215",
            price: "110 taka",
        },
        {
            name: "Beef Kacchi",
            code: "#217",
            price: "260 taka",
        },

        {
            name: "Chicken Biriyani",
            code: "#208",
            price: "160 taka",
        },

        {
            name: "Morog Polau",
            code: "#219",
            price: "140 taka",
        },

     

    ]
    return (
        <div>
            <FoodTable foods={foods}/>
        </div>
    )
}

export default FoodList