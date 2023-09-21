import React from 'react'
import FoodTable from '../components/FoodTable'

const CartDetails = () => {
  return (
    <div>
      <div className='flex flex-row p-6'>
        <h1 className='mx-6 text-3xl font-bold'>Cart Details</h1>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline'>Remove All</button>
      </div>
      <FoodTable/>
      <div>
        <div className='flex justify-center my-7 py-3'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline'>Review Subscription</button>

        </div>

      </div>
    </div>
  )
}

export default CartDetails