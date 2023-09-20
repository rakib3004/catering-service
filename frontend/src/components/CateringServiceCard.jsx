import React from 'react'

const CateringServiceCard = ({cateringService}) => {
  return (
    <div>
      <div className='h-12 w-12 rounded-full '>
      <img src={cateringService.image} alt={cateringService.name}/>

      </div>
      <h1>{cateringService.name}</h1>
      <h2>{cateringService.location}</h2>
      <h2>Total Items{cateringService.items}</h2>

    </div>
  )
}

export default CateringServiceCard