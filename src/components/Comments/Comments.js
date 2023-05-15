import React from 'react'
import '../../styles/Comments/Comments.css'
import CommentsInput from './CommentsInput'
import CommentsOutput from './CommentsOutput'
import { useState } from 'react'

const Comments = ({movieId}) => {

  const[commentsToSHow,setCommentsToSHow]=useState(null)

  return (
    <div className='comments__conteiner'>
      <CommentsInput movieId={movieId.movieId} setCommentsToSHow={setCommentsToSHow} commentsToSHow={commentsToSHow}/>
      <CommentsOutput movieId={movieId.movieId} setCommentsToSHow={setCommentsToSHow} commentsToSHow={commentsToSHow}/>
    </div>
  )
}

export default Comments