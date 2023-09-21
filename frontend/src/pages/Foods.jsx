import React from 'react'
import FoodList from '../features/FoodList'
import Navbar from '../components/Navbar'
const Foods = () => {
  return (
    <div>
      <Navbar />

      <div className='flex flex-row p-6'>
        <h1 className='mx-6 text-3xl font-bold'>Paragon Catering Food List</h1>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline'>Add Food</button>
      </div>

      <FoodList />
    </div>
  )
}

export default Foods