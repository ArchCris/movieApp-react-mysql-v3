import React, { useState } from 'react'
import { useContext } from 'react'
import { CredentialContext } from '../../context/ContextProvider'
import axios from 'axios'
import '../../styles/Comments/CommentsInput.css'

const CommentsInput = ({movieId,setCommentsToSHow,getComments}) => {

  const[comment,setComment]=useState(null)

  const{credentialStatus}=useContext(CredentialContext)

  const username = (credentialStatus.data.user[0].username).toUpperCase()

  const writeComment = () => {
    const date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    const displayDate = [year, month, day].join('-');
    const displayHour = [hour, minutes].join(':');

    const time = displayDate + " " + displayHour


    axios.post(`${process.env.REACT_APP_LOCAL_URL}/comment`,{movieid:movieId,username:username,comment:comment,date:time})
        .then(resp=>{         
            setCommentsToSHow(commentsToSHow=>[...commentsToSHow,{movieid:movieId,username:username,comment:comment,date:time}])
            setComment('')
            getComments()
        }).catch(error=>{
            console.log(error)
        })

  }

  
  return (
    <div className='commentsInput__conteiner'>
      <p className='commentsInput__title'>Leave a comment</p>
      <textarea className='commentsInput__input' value={comment ? comment : ''} onChange={(e)=>{setComment(e.target.value)}}></textarea>
      <button className='commentsInput__button' onClick={()=>{writeComment()}}>Send the comment</button>
    </div>
  )
}

export default CommentsInput