import React, { useEffect } from 'react'
import axios from 'axios';
import '../../styles/Comments/CommentsOutput.css'
import { useContext } from 'react';
import { CredentialContext } from '../../context/ContextProvider';


const CommentsOutput = ({commentsToSHow,getComments}) => {

  //Credential from context
  const{credentialStatus}=useContext(CredentialContext)

  const deleteComment = (id) => {
    axios.post(`${process.env.REACT_APP_LOCAL_URL}/deleteComment`,{commentId:id})
        .then(resp=>{
            getComments()     
        }).catch(error=>{
            console.log(error)
        })
  }

  useEffect(() => {
    getComments()
  }, []);


  return (
    <div className='commentsOutput__conteiner'>
      {commentsToSHow?.map((comment,key)=>{
        return(
          <div className='commentsOutput__mensajeBody' key={key}>
            <div className='commentsOutput__mensajeBodyTop'>
              <span>{comment.username}</span>
              <span>{comment.date}</span>           
              <button onClick={()=>{deleteComment(comment.idcomments)}}
               className='commentsOutput__mensajeBodyTop-btn'
               disabled={(credentialStatus.data.user[0].username).toUpperCase() === comment.username ? false : true}
               >X</button> 
            </div>
            <p className='commentsOutput__mensajeComment'>{comment.comment}</p>
          </div>
        )
      })}
      
    </div>
  )
}

export default CommentsOutput