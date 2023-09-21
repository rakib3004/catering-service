import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

const showEmployees = () =>{
navigate('/employees');
}

const showManagers  = () =>{
  navigate('/managers');

}

  return (
    <div className='h-8 bg-amber-500 w-full flex flex-row'>
        <h1 className='mx-10 text-xl font-bold'>Catering Express</h1>
<div className=' flex flex-row right'>
<div className='mx-10 text-xl font-bold'>
<button onClick={showEmployees}>Employees</button>
</div>

<div className='mx-10 text-xl font-bold'>
<button onClick={showManagers}>Managers</button>

</div>
</div>
    </div>
  )
}

export default Navbar