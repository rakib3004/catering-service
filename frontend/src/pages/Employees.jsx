import React from 'react'
import EmployeeList from '../features/EmployeeList'
import Navbar from '../components/Navbar'

const Employees = () => {
  return (
    <div>
      <Navbar />

      <div className='flex flex-row p-6'>
        <h1 className='mx-6 text-3xl font-bold'>Random IT Ltd. Employee List</h1>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline'>Invite Employee</button>
      </div>
      <EmployeeList />
    </div>
  )
}

export default Employees