import SignLogin from '../components/SignLogin';
import '../styles/Home.css'
import { CredentialContext } from '../context/ContextProvider'
import { useContext } from 'react'
import MovieGallery from '../components/MovieGallery';
import axios from 'axios';

function Home() {

  axios.defaults.withCredentials=true

  const{credentialStatus}=useContext(CredentialContext)
  
  return (
    <div className="home__conteiner">
      {!credentialStatus ?
      <SignLogin/> :
      <MovieGallery/>}
    </div>
  );
}

export default Home;
