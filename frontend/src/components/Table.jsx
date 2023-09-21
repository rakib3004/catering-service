import React, { useState } from 'react'

const Table = ({titles, persons}) => {
  
 

  return (
    <div className="container mx-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">{titles.name}</th>
            <th className="px-4 py-2">{titles.email}</th>
            <th className="px-4 py-2">{titles.join}</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => (

            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}>
              <td className="border px-4 py-2 text-center">{person.name}</td>
              <td className="border px-4 py-2 text-center">{person.email}</td>
              <td className="border px-4 py-2 text-center">{person.joiningDate}</td>
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

export default Table