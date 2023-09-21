import React from 'react'

const FoodTable = ({foods}) => {
  return (
    <div className="container mx-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Food Name</th>
            <th className="px-4 py-2">Product Code</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2"></th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food, index) => (

            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}>
              <td className="border px-4 py-2 text-center">{food.name}</td>
              <td className="border px-4 py-2 text-center">{food.code}</td>
              <td className="border px-4 py-2 text-center">{food.price}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-base py-1 px-5 rounded focus:outline-none focus:shadow-outline"
                >
                  Edit
                </button>
              </td>
              <td className="border px-4 py-2 text-center">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-base py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => removeFoodItem(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> 
      </div>
  );
}
export default FoodTable