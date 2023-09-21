import React from 'react'

const EmployeeCalendarTable = ({list}) => {
  return (
    <div className="container mx-auto">
    <table className="min-w-full table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Food Name</th>
          <th className="px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {list.map((info, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}>
            <td className="border px-4 py-2 text-center">{info.date}</td>
            <td className="border px-4 py-2 text-center">{info.foodName}</td>
            <td className="border px-4 py-2 text-center">
              <button
                className={`${info.color}  text-white font-base py-1 px-2 rounded focus:outline-none focus:shadow-outline`}
              >
                {info.status}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>  )
}

export default EmployeeCalendarTable