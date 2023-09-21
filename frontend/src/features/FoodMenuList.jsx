import React from 'react'
import FoodCard from '../components/FoodCard'
import { useNavigate } from 'react-router-dom';

const FoodMenuList = () => {

  const foods = [
    {
      image: "food/fish-curry.png",
      name: "Fish Curry",
      price: "150 tk",
    },
    {
      image: "food/kacchi.png",
      name: "Kacchi",
      price: "250 tk",
    },
    {
      image: "food/chicken-biriyani.png",
      name: "Chicken Biriyani",
      price: "150 tk",
    },
    {
      image: "food/chicken-kichuri.png",
      name: "Chicken Kichuri",
      price: "150 tk",
    },

    {
      image: "food/chicken-fried-rice.png",
      name: "Chicken Fried Rice",
      price: "150 tk",
    },
 
    {
      image: "food/beef-kichuri.png",
      name: "Beef Kichuri",
      price: "200 tk",
    },
    
    {
      image: "food/morog-polau.png",
      name: "Morog Polau",
      price: "170 tk",
    },
    {
      image: "food/beef-biriyani.png",
      name: "Beef Biriyani",
      price: "210 tk",
    },
    {
      image: "food/vorta-vaat.png",
      name: "Vorta Vaat",
      price: "70 tk",
    },
    {
      image: "food/fried-rice-with-curry.png",
      name: "Fried Rice with Curry",
      price: "110 tk",
    },
  ];
  const navigate = useNavigate()
const goToCart=()=>{
navigate('/cart')
}
    return (
        <div  className="mx-6 lg:mx-20 mt-5 lg:mt-10 grid gap-1 lg:gap-4 grid-cols-2 lg:grid-cols-4">
            {
                foods.map((food) => (
                  <button onClick={goToCart}>
                    <FoodCard key={food.name} food={food} />

                  </button>
                ))

            }    </div>
    )  
}

export default FoodMenuList