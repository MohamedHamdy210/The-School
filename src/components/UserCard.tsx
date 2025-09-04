import Image from 'next/image'
import React from 'react'

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4  flex-1'>
      <div className="flex items-center  justify-between ">
        <span className='text-[10px] px-2 py-1 bg-white text-green-600 rounded-full'>2024/25</span>
        <Image src="/more.png" height={20} width={20} alt='' />
      </div>
      <h1 className='text-2xl font-semibold my-4'>1,234</h1>
      <h2 className='capitalize text-sm font-medium text-gray-500 '>{type}</h2>

    </div>
  )
}

export default UserCard