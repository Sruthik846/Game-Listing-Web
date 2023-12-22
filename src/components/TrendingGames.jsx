import React, { useEffect } from 'react'

const TrendingGames = ({gameList}) => {
    useEffect(() => {
        console.log(gameList)
    }, [])
  return (
    <div className='mt-5 hidden md:block'>
        <h2 className='text-[30px] dark:text-white font-bold'>Trending Games</h2>
        <div className=' md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
        {gameList.map((item,index)=>index<4&&(
           <div className='bg-slate-600 rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out'>
                <img src={item.background_image} alt="game images"
                className='h-[370px] object-cover rounded-t' />
                <h2 className='font-bold text-[20px] p-2 dark:text-white'>{item.name}</h2>
           </div> 
        ))}
    </div>
    </div>
  )
}

export default TrendingGames