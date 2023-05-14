import React from 'react'
import '../styles/MovieGallery.css'
import axios from 'axios'
import { useEffect,useState } from 'react'
import MovieCard from './MovieCard'

const MovieGallery = () => {

  axios.defaults.withCredentials=true

    const[moviesToDisplay,setMoviesToDisplay]=useState([])
  
    const getPopularMovies = async () =>{
      try{
        let query = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
        const data = await fetch(query)
        const response = await data.json()
        setMoviesToDisplay(response.results)
        
      }catch(err){
        console.log(err)
      }
    }


    useEffect(() => {
      getPopularMovies()
    }, []);

  return (
    <div className='movieGallery__conteiner'>
        {moviesToDisplay.map((movie,key)=>{
          return(
            <MovieCard key={key} id={movie.id} img={movie.poster_path} title={movie.original_title} vote={movie.vote_average}/>
          )
        })}
    </div>
  )
}

export default MovieGallery