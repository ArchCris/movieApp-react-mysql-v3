import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { CredentialContext } from '../context/ContextProvider'
import { useContext,useEffect } from 'react'
import axios from 'axios'
import Credential from './Credential'
import LiveSearch from './LiveSearch'


const Navbar = () => {

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
    <nav className='navbar__conteiner'>
        <ul className='navbar__conteiner-ul'>
            <li>
                <Link className='navbar__link' to="/">HOME</Link>
            </li>
            {credentialStatus ?
            <>
            <li>
                <LiveSearch/>
            </li>
            <Credential setCredentialStatus={setCredentialStatus}/>
            </>
            : null
            }
        </ul>
    </nav>
  )
}

export default Navbar