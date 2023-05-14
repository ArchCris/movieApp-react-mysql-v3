import React from 'react'
import { useState,useEffect } from 'react'
import '../styles/MovieDetail.css'
import ScoreBadge from './ScoreBadge'
import axios from 'axios'


const MovieDetail = (props) => {

  axios.defaults.withCredentials=true

  const[detailMovie,setDetailMovie]=useState(null)

  const getSpecificMovie = async () =>{
    try{
      let query = `https://api.themoviedb.org/3/movie/${props.movieId.movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
      const data = await fetch(query)
      const response = await data.json()
      setDetailMovie(response)
    }catch(err){
      console.log(err)
    }
  }

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
  
    return  hours + ':' + minutes+' hs' ;
  }

  useEffect(() => {
    console.log('get specific movie')
    getSpecificMovie()
  }, []);

  return (
    <div className='movieDetail__conteiner'>
      <img className='movieDetail__poster' alt='Movie poster' src={detailMovie ? `https://image.tmdb.org/t/p/w400${detailMovie?.poster_path}` : null}></img>
      <div className='movieDetail__data'>
        <div className='movieDetail__title'><p className='identifier'>Title: </p>{detailMovie?.original_title}</div>
        <div className='movieDetail__caption'><p className='identifier'>Description: </p>{detailMovie?.overview}</div>
        <div className='movieDetail__caption'><p className='identifier'>Release date: </p>{detailMovie?.release_date}</div>
        <div className='movieDetail__caption'><p className='identifier'>Genres: </p>{detailMovie?.genres.map((gen,key)=>{return(<span className='genre' key={key}>{gen.name}</span>)})}</div>
        <div className='movieDetail__caption'><p className='identifier'>Duration: </p>{toHoursAndMinutes(detailMovie?.runtime)}</div>
        <div className='movieDetail__caption'><p className='identifier'>Movie buddget: </p>{detailMovie?.budget!==0 ? '$'+detailMovie?.budget : "No data"}</div>
        <div className='movieDetail__caption'><p className='identifier'>Movie status: </p>{detailMovie?.status}</div>
        <ScoreBadge data={{totalVote:detailMovie?.vote_count,averageScore:detailMovie?.vote_average}}/>
      </div>
    </div>       
  )
}

export default MovieDetail