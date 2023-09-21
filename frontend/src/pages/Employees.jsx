import React from 'react'
import EmployeeList from '../features/EmployeeList'

const Employees = () => {
  return (
    <div>
        <div className='flex flex-row p-6'>
        <h1 className='mx-6 text-3xl font-bold'>Paragon Catering Manager List </h1>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline'>Invite Employee</button>
      </div>
      <EmployeeList/>
    </div>
  )
}

export default Employees