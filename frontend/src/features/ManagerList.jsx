import React from 'react'
import Table from '../components/Table';

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
    <Table titles={titles} persons={managers}/>
  </div>  )
}

export default ManagerList