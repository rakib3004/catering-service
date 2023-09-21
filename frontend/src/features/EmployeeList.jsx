import React from 'react'
import Table from '../components/Table'
const EmployeeList = () => {
  const titles = {
    name: 'Employee Name',
    email: 'Email',
    join:'Joining Date',
  }
  const employees = [

    {
      name:'Mursalin Ahmed',
      email: 'mursalin.ahmed@gmail.com',
      joiningDate: '3/2/2017'
    },

    {
      name:'Aminul Islam Zico',
      email: 'aminul.islam@gmail.com',
      joiningDate: '2/7/2018'
    },

    {
      name:'Mridul Haque',
      email: 'mridul.haque@gmail.com',
      joiningDate: '6/6/2022'
    },

    {
      name:'Md. Rakib Trofder',
      email: 'mdrakibtrofder@gmail.com',
      joiningDate: '1/4/2023'
    },
  ];
  return (
    <div>
    
      <Table titles={titles} persons={employees}/>
    </div>

  )
}

export default EmployeeList