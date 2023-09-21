import React from 'react'
import FoodCard from '../components/FoodCard'

const FoodList = () => {

  const foods = [
    {
      image: "",
      name: "",
      price: "",
    },
    {
      image: "",
      name: "",
      price: "",
    },
    {
      image: "",
      name: "",
      price: "",
    },
    {
      image: "",
      name: "",
      price: "",
    },

    {
      image: "",
      name: "",
      price: "",
    },
 
    {
      image: "",
      name: "",
      price: "",
    },
    
    {
      image: "",
      name: "",
      price: "",
    },
    {
      image: "",
      name: "",
      price: "",
    },
    {
      image: "",
      name: "",
      price: "",
    },
    {
      image: "",
      name: "",
      price: "",
    },
    {
      image: "",
      name: "",
      price: "",
    },


  ];

    return (
        <div  className="mx-6 lg:mx-20 mt-5 lg:mt-10 grid gap-1 lg:gap-4 grid-cols-2 lg:grid-cols-4">
            {
                foods.map((food) => (
                    <FoodCard key={food.name} food={food} />
                ))

            }    </div>
    )  
}

export default FoodList