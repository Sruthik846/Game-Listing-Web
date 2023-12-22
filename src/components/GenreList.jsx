import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

const GenreList = ({genereId,selectedGenresName}) => {
    const [genreList, setGenreList] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        getgenrelist();
    }, [])

    const getgenrelist = () => {
        GlobalApi.getGenreList.then((resp) =>{
            console.log(resp.data.results);
            setGenreList(resp.data.results);
        })
    }
  return (
    <div>
        <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>
        {genreList.map((item,index)=>(
            <div onClick={()=> {setActiveIndex(index);genereId(item.id); selectedGenresName(item.name)}}
             className={`flex gap-2 items-center cursor-pointer mb-2 p-2 rounded-lg hover:bg-gray-300 hover:dark:bg-gray-600 group ${activeIndex === index ?'bg-gray-300 dark:bg-gray-600' : null}`}> 
                <img src={item.image_background} alt="image" className={`h-[40px] w-[40px] object-cover rounded-lg group-hover:scale-105 ease-out duration-300 transition-all ${activeIndex === index ?'scale-105' : null} `} />
                <h3 className={`dark:text-white text-[18px] group-hover:font-bold ease-out duration-300 transition-all ${activeIndex === index ?'font-bold' : null}`}>{item.name}</h3>
            </div>
        ))}
    </div>
  )
}

export default GenreList