import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { CredentialContext } from '../context/ContextProvider'
import { useContext } from 'react'
import Credential from './Credential'
import LiveSearch from './LiveSearch'


const Navbar = () => {

//Credential from context
const{credentialStatus,setCredentialStatus}=useContext(CredentialContext)
    
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