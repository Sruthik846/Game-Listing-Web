import axios from "axios";

const key = '00bbf0155a04494c8e1452112b1bd3c1'
const axiosCreate= axios.create({ 
    baseURL : 'https://api.rawg.io/api'
})


const getGenreList = axiosCreate('/genres?key='+key);
const getAllGames = axiosCreate('/games?key='+key);
const getGameListByGenreId = (id) => axiosCreate('/games?key='+key+'&genres='+id)
export default {
    getGenreList,
    getAllGames,
    getGameListByGenreId
}