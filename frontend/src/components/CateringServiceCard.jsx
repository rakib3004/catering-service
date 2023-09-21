import React from 'react'

const CateringServiceCard = ({cateringService}) => {
  return (


    <div class="group ease-in-out transition w-36 lg:w-64 mx-4 my-2 p-1 lg:p-8 bg-white hover:bg-[#6251A7] lg:ring-4 ring-2 ring-[#6251A7]  rounded-xl shadow-md transform hover:scale-105 duration-500">
    <img
      class="h-12 w-12 lg:h-24 lg:w-24 mx-auto rounded-full lg:ring-4 ring-2 ring-[#6251A7] group-hover:ring-[#F8DE22] mt-3 lg:mt-7"
      src={cateringService.image}
      alt="Catering Service"
    />

    <div class="text-center space-y-2 my-5 lg:my-1">
      <div class="space-y-0.5">
        <p class="text-xs lg:text-lg text-black group-hover:text-white font-semibold">{cateringService.name}</p>
        <p class="text-xs lg:text-lg text-gray-500 group-hover:text-white font-medium">{cateringService.location}</p>
      </div>
    </div>
  </div>
  )
}

export default CateringServiceCard