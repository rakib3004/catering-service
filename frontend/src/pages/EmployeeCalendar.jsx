import React from 'react'
import Navbar from '../components/Navbar'
import EmployeeCalendarList from '../features/EmployeeCalendarList'
const EmployeeCalendar = () => {
  return (
    <div>
        <Navbar/>
        <h1 className='mx-6 text-3xl font-bold'>Calendar </h1>
        <EmployeeCalendarList />
    </div>
  )
}

export default EmployeeCalendar