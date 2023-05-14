import SignLogin from '../components/SignLogin';
import '../styles/Home.css'
import { CredentialContext } from '../context/ContextProvider'
import { useContext } from 'react'
import MovieGallery from '../components/MovieGallery';
import axios from 'axios';

function Home() {

  //Credential from context
  const{credentialStatus}=useContext(CredentialContext)

  axios.defaults.withCredentials=true
  
  return (
    <div className="home__conteiner">
      {!credentialStatus ?
      <SignLogin/> :
      <MovieGallery/>}
    </div>
  );
}

export default Home;
