import React from 'react'
import EmployeeCalendarTable from '../components/EmployeeCalendarTable';

const EmployeeCalendarList = () => {

    const data = {
    
    "delivered": {
    title: "Delivered",
    color: "bg-green-500"
   },
     "offDay" :{
        title: "Off Day",
        color: "bg-red-500"
    },

     "orderCancel" : {
        title: "Order Cancel",
        color: "bg-red-500"
    },

     "pending" : {
        title: "Pending",
        color: "bg-yellow-500"
    },

     "confirm" : {
        title: "Confirm",
        color: "bg-gray-500"
    },

}
    const list = [
{
date: "01/05/2023",
foodName: "Fried Rice with curry",
status: data["delivered"].title,
color: data["delivered"].color,
},

{
    date: "02/05/2023",
    foodName: "Chicken Biriyani",
    status: data["delivered"].title,
    color: data["delivered"].color,
},

{
    date: "03/05/2023",
    foodName: "---------",
    status: data["offDay"].title,
    color: data["offDay"].color,
},

{
    date: "04/05/2023",
    foodName: "---------",
    status: data["orderCancel"].title,
    color: data["orderCancel"].color,
},

{
    date: "05/05/2023",
    foodName: "Fried Rice with curry",
    status: data["pending"].title,
    color: data["pending"].color,
},

{
    date: "06/05/2023",
    foodName: "Select",
    status: data["confirm"].title,
    color: data["confirm"].color,
},


{
    date: "07/05/2023",
    foodName: "Select",
    status: data["confirm"].title,
    color: data["confirm"].color,
},

    ];
  return (
    <div>
<EmployeeCalendarTable list={list}/>
    </div>
  )
}

export default EmployeeCalendarList