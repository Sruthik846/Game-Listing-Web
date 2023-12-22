import React, { useEffect, useState } from 'react'
import GenreList from '../components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../components/Banner';
import TrendingGames from '../components/TrendingGames';
import GamesByGenresId from '../components/GamesByGenresId';

const Home = () => {
  const [allgamesList, setAllgamesList] = useState();
  const [gameListbyGenres, setGameListbyGenres] = useState([])
  const [selectedGenresName, setSelectedGenresName] = useState('Action')
  useEffect(() => {
    getAllGamesList();
    getGameListByGenresid(4);
  }, [])

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp)=>{
      console.log(resp.data.results);
      setAllgamesList(resp.data.results);
    })
  } 

  const getGameListByGenresid = (id) =>{
    console.log("ID : ",id);
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      console.log("Genres by id",resp.data.results);
      setGameListbyGenres(resp.data.results)
    })
  }

  return (
    <div className='grid grid-cols-4 px-8 gap-5'> 
        <div className='w-full hidden md:block'>
            <GenreList genereId={(genereId) => getGameListByGenresid(genereId)} selectedGenresName={(name) =>setSelectedGenresName(name)}/>
        </div>
        <div className='col-span-4 first-letter: md:col-span-3 w-full  '>
          {allgamesList?.length >0 && gameListbyGenres?.length >0 ? 
          <div>
            <Banner gameBanner={allgamesList[0]} />
            <TrendingGames gameList = {allgamesList} />
            <GamesByGenresId gameList={gameListbyGenres} selectedGenresname = {selectedGenresName} />
          </div> : null}
        </div>
    </div>
  )
}

export default Home