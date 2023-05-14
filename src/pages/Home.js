import SignLogin from '../components/SignLogin';
import '../styles/Home.css'
import { CredentialContext } from '../context/ContextProvider'
import { useContext,useEffect } from 'react'
import MovieGallery from '../components/MovieGallery';
import axios from 'axios';

function Home() {

  //Credential from context
  const{credentialStatus,setCredentialStatus}=useContext(CredentialContext)

  axios.defaults.withCredentials=true

  const checkSession = () => {
    axios.get(`${process.env.REACT_APP_LOCAL_URL}/login`,{ withCredentials: true })
    .then(resp=>{
        if(resp.data.loggedIn===true){
            setCredentialStatus(resp)
        }
    }).catch(error=>{
        console.log(error)
    })
  }

  useEffect(() => {
    checkSession()
  }, []);
  
  return (
    <div className="home__conteiner">
      {!credentialStatus ?
      <SignLogin/> :
      <MovieGallery/>}
    </div>
  );
}

export default Home;
