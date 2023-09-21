import React, { useState } from "react";

const FoodCartTable = () => {
  const [foodItems, setFoodItems] = useState([
    { id: 1, name: "Chichen Biriyani", code: "#412", price: "140 tk" },
    { id: 2, name: "Kacchi", code: "#132", price: "180 tk" },
    { id: 3, name: "Chichen Fried Rice", code: "#402", price: "140 tk" },
    { id: 4, name: "Beef Kichuri", code: "#232", price: "210 tk" },
    { id: 5, name: "Chichen Kichuri", code: "#112", price: "140 tk" },
    { id: 6, name: "Vorta Vaat", code: "#172", price: "70 tk" },
  ]);

  const removeFoodItem = (id) => {
    setFoodItems(foodItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Food Name</th>
            <th className="px-4 py-2">Food Code</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((item) => (
            <tr key={item.id} className={item.id % 2 === 0 ? "bg-white" : "bg-gray-200"}>
              <td className="border px-4 py-2 text-center">{item.name}</td>
              <td className="border px-4 py-2 text-center">{item.code}</td>
              <td className="border px-4 py-2 text-center">{item.price}</td>
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
};

export default FoodCartTable;
