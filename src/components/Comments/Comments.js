import React from 'react'
import '../../styles/Comments/Comments.css'
import CommentsInput from './CommentsInput'
import CommentsOutput from './CommentsOutput'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Comments = ({movieId}) => {

  const[commentsToSHow,setCommentsToSHow]=useState(null)

  const getComments = () => {
    axios.post(`${process.env.REACT_APP_LOCAL_URL}/getcomments`,{movieid:movieId})
        .then(resp=>{      
            setCommentsToSHow(resp.data)
        }).catch(error=>{
            console.log(error)
        })
  }

  useEffect(() => {
    getComments()
  }, []);


  return (
    <div className='comments__conteiner'>
      <CommentsInput movieId={movieId.movieId} setCommentsToSHow={setCommentsToSHow} commentsToSHow={commentsToSHow} getComments={getComments}/>
      <CommentsOutput movieId={movieId.movieId} setCommentsToSHow={setCommentsToSHow} commentsToSHow={commentsToSHow} getComments={getComments}/>
    </div>
  )
}

export default Comments