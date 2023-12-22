import React, { useEffect } from 'react'

const GamesByGenresId = ({gameList,selectedGenresname}) => {

  useEffect(() => {
   console.log('Gamelist ',gameList)
  }, [])

  return (
    <div>
      <h2 className='text-[30px] dark:text-white font-bold mt-5'>{selectedGenresname} Games</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
        {gameList.map((item) => (
          <div className='bg-slate-600 p-3 rounded-lg pb-10 h-full hover:scale-110 transition-all duration-300 ease-in-out'>
            <img src={item.background_image} alt="img" className='w-full h-[80%] rounded-xl object-cover' />
            <h2 className='font-bold text-[20px] dark:text-white'>{item.name} 
              <span className='p-1 rounded-sm ml-2 bg-green-100 text-green-700 text-[10px] font-medium'>{item.metacritic}</span>
            </h2>
            <h2 className='text-gray-500 dark:text-gray-100'>⭐{item.rating} &nbsp;&nbsp;💬{item.reviews_count} &nbsp;&nbsp;🔥{item.suggestions_count}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GamesByGenresId