import React from 'react'
import '../styles/LiveSearch.css'
import { useState } from 'react'

const LiveSearch = () => {

    const[searchingMovies,setSearchingMovies]=useState('')
    const[searchedMovies,setSearchedMovies]=useState([])

    const handleSearch = async (e) =>{
      setSearchingMovies(e.target.value)
      try{
        let query = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${searchingMovies}`
        const data = await fetch(query)
        const response = await data.json()
        setSearchedMovies(response.results)
      }catch(err){
        console.log(err)
      }
    }
    

  return (
    <div className='liveSearch__conteiner'>
        <input value={searchingMovies} onChange={(e)=>{handleSearch(e)}} className='liveSearch__input' type='text'></input>
        <ul className='liveSearch__results' onMouseLeave={() => {setSearchedMovies([]);setSearchingMovies('')}} >
        {searchedMovies.slice(0,6).map((movie,key)=>{
         return(
            <a className='liveSearch__result' href={`/find/${movie.id}`} key={key}>{movie.title}</a>
             )
          })}
        </ul>
    </div>
  )
}

export default LiveSearch

