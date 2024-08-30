import React from 'react'


const Contact = () => {
  return (
    <div>
        <h1 className='m-4 p-4 font-bold text-center text-lg'>Contact US Page</h1>
        <form className='flex flex-col mx-96'>
          <input className='p-2 m-2 border border-gray-400 ' type='text' placeholder='Name'   />
          <input className='p-2 m-2 border border-gray-400 ' type='text' placeholder='Write somthing..'   />
          <button className='p-2 m-2 border border-gray-400 rounded-md bg-slate-300 ' >Submit</button>
        </form>
    </div>
  )
}

export default Contact
