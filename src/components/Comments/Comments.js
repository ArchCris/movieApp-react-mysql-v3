import React from 'react'
import '../../styles/Comments/Comments.css'
import CommentsInput from './CommentsInput'
import CommentsOutput from './CommentsOutput'
import { useState } from 'react'
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

  return (
    <div className='comments__conteiner'>
      <CommentsInput movieId={movieId.movieId} setCommentsToSHow={setCommentsToSHow} commentsToSHow={commentsToSHow}/>
      <CommentsOutput movieId={movieId.movieId} setCommentsToSHow={setCommentsToSHow} commentsToSHow={commentsToSHow} getComments={getComments}/>
    </div>
  )
}

export default Comments