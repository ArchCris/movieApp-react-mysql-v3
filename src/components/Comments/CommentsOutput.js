import React, { useEffect } from 'react'
import axios from 'axios';
import '../../styles/Comments/CommentsOutput.css'
import { useContext } from 'react';
import { CredentialContext } from '../../context/ContextProvider';


const CommentsOutput = ({movieId,setCommentsToSHow,commentsToSHow}) => {

  //Credential from context
  const{credentialStatus}=useContext(CredentialContext)

  const getComments = () => {
    axios.post(`${process.env.REACT_APP_LOCAL_URL}/getcomments`,{movieid:movieId})
        .then(resp=>{      
            setCommentsToSHow(resp.data)
        }).catch(error=>{
            console.log(error)
        })
  }

  const deleteComment = (id) => {
    axios.post(`${process.env.REACT_APP_LOCAL_URL}/deleteComment`,{commentId:id})
        .then(resp=>{     
            setCommentsToSHow(commentsToSHow=>[...commentsToSHow.filter(comment=>comment.idcomments!==id)])
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