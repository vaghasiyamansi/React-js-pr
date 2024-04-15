import React,{useState} from 'react'
import Data from "./TableData"

function Table() {
  const[data,setData]= useState(Data);
  console.log(data, "TableData");
  return (
    <div className='mt-36 flex justify-center'>
      <table class="table-auto w-[70%]">
  <thead>
    <tr className="bg-orange-200 font-extrabold text-[28px]  text-red-600">
      <th className="px-10 py-6 border-2 border-red-700">Id</th>
      <th className="px-10 py-6 border-2 border-red-700">Name</th>
      <th className="px-10 py-6 border-2 border-red-700">Email</th>
      <th className="px-10 py-6 border-2 border-red-700">City</th>
      <th className="px-10 py-6 border-2 border-red-700">Phone</th>
    </tr>
  </thead>
  <tbody>

    {
      data.map((cvalue , ind)=>{
        return (
          <>
    <tr className="bg-orange-300">
      <td className="px-10 py-7 border-2 border-red-700">{cvalue.ID}</td>
      <td className="px-10 py-7 border-2 border-red-700">{cvalue.Name}</td>
      <td className="px-10 py-7 border-2 border-red-700">{cvalue.Email}</td>
      <td className="px-10 py-7 border-2 border-red-700">{cvalue.City}</td>
      <td className="px-10 py-7 border-2 border-red-700">{cvalue.Phone}</td>
    </tr>
          </>
        )
      })
    }
          
    {/* <tr className="bg-orange-400">
      <td className="px-10 py-7 border-2 border-red-700"></td>
      <td className="px-10 py-7 border-2 border-red-700"></td>
      <td className="px-10 py-7 border-2 border-red-700"></td>
      <td className="px-10 py-7 border-2 border-red-700"></td>
      <td className="px-10 py-7 border-2 border-red-700"></td>
    </tr>
    <tr className="bg-orange-500">
      <td className="px-10 py-7 border-2 border-red-700"></td>
      <td className="px-10 py-7 border-2 border-red-700"></td>
      <td className="px-10 py-7 border-2 border-red-700"></td>
      <td className="px-10 py-7 border-2 border-red-700"></td>
      <td className="px-10 py-7 border-2 border-red-700"></td>
    </tr>
    <tr className="bg-orange-600">
      <td className="px-10 py-7 border-2 border-red-700"></td>
      <td className="px-10 py-7 border-2 border-red-700"></td>
      <td className="px-10 py-7 border-2 border-red-700"></td>
      <td className="px-10 py-7 border-2 border-red-700"></td>
      <td className="px-10 py-7 border-2 border-red-700"></td>
    </tr>    
    <tr className="bg-orange-700">
      <td className="px-10 py-7 border-2 border-red-700"></td>
      <td className="px-10 py-7 border-2 border-red-700"></td>
      <td className="px-10 py-7 border-2 border-red-700"></td>
      <td className="px-10 py-7 border-2 border-red-700"></td>
      <td className="px-10 py-7 border-2 border-red-700"></td>
    </tr> */}
  </tbody>
</table>
    </div>
  )
}

export default Table
