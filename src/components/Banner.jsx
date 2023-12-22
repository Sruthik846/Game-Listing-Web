import React, { useEffect } from 'react'

const Banner = ({gameBanner}) => {
    useEffect(() => {
        console.log('Gamebanner :',gameBanner);
    }, [])
  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full'>
            <h2 className='text-[24px] text-white font-bold'>{gameBanner.name}</h2>
            <button className='bg-blue-700 text-white p-1 px-2 font-semibold rounded-lg '>Get Now</button>
        </div>
        <img src={gameBanner.background_image} alt="banner_image" className='md:h-[450px] w-full object-cover rounded-xl' />
    </div>
  )
}

export default Banner