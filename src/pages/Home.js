import SignLogin from '../components/SignLogin';
import '../styles/Home.css'
import { CredentialContext } from '../context/ContextProvider'
import { useContext } from 'react'
import MovieGallery from '../components/MovieGallery';

function Home() {

  const{credentialStatus,setCredentialStatus}=useContext(CredentialContext)
  console.log(credentialStatus)
  return (
    <div className="home__conteiner">
      {!credentialStatus ?
      <SignLogin/> :
      <MovieGallery/>}
    </div>
  );
}

export default Home;
