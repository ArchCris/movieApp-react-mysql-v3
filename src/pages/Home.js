import SignLogin from '../components/SignLogin';
import '../styles/Home.css'
import { CredentialContext } from '../context/ContextProvider'
import { useContext,useEffect } from 'react'
import MovieGallery from '../components/MovieGallery';
import axios from 'axios';

function Home() {

  axios.defaults.withCredentials=true

  //Credential from context
  const{credentialStatus,setCredentialStatus}=useContext(CredentialContext)

  //Check session
  useEffect(() => {
      axios.get(`${process.env.REACT_APP_LOCAL_URL}/login`,{ withCredentials: true })
      .then(resp=>{
          if(resp.data.loggedIn===true){
              setCredentialStatus(resp)
          }else{
              setCredentialStatus(null)
          }
      }).catch(error=>{
          console.log(error)
      })
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
