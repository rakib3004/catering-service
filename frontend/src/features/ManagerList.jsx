import React from 'react'

const ManagerList = () => {

  const titles = {
    name: 'Employee Name',
    email: 'Email',
    join:'Joining Date',
  }
  const managers = [
    {
      name:'Jafar Mahin',
      email: 'jafar.mahin@gmail.com',
      joiningDate: '5/2/2015'
    },

    {
      name:'Mushfiqur Rahman',
      email: 'mushfiqur.rahman@gmail.com',
      joiningDate: '2/1/2017'
    },

    {
      name:'Kazi Muktadir',
      email: 'kazi.muktadir@gmail.com',
      joiningDate: '6/5/2019'
    },

    {
      name:'Arif Hasan',
      email: 'arif.hasan@gmail.com',
      joiningDate: '7/4/2023'
    },

    
  ];

  return (
    <div>
    <div className='flex flex-row p-6'>
      <h1 className='mx-6 text-3xl font-bold'>Random IT Ltd. Employee List</h1>
      <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline'>Invite Employee</button>
    </div>
    <Table titles={titles} persons={managers}/>
  </div>  )
}

export default ManagerList