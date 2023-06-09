import React, { useContext} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/Find.css'
import MovieDetail from '../components/MovieDetail';
import { CredentialContext } from '../context/ContextProvider';
import Comments from '../components/Comments/Comments';

const Find = () => {

  const{credentialStatus}=useContext(CredentialContext)

  axios.defaults.withCredentials=true

  let movieId = useParams();
  
  return (
    <div className='find__conteiner'>
      {credentialStatus ?
      <MovieDetail movieId={movieId}/>
      : null}
      {credentialStatus ?
      <Comments movieId={movieId}/>
      : null}
    </div>
  )
}

export default Find