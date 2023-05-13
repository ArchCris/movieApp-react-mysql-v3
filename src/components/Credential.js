import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import '../styles/Credential.css'


const Credential = (props) => {

    const navigate = useNavigate();
    

    const logOut = () =>{
        axios.get(`${process.env.REACT_APP_LOCAL_URL}/logout`)
        .then(resp=>{
            props.setCredentialStatus(null)
            navigate('/')
        }).catch(error=>{
            console.log(error)
        })
        
        
    }

  return (
    <div className='credential__conteiner'>
        <div className='credential__top'>
            <p className='credential__top-text'>LOGGED</p>
            <div className='credential__top-ligth'></div>
        </div>
        <button className='credential__bottom' onClick={()=>{logOut()}}>Log out</button>
    </div>
  )
}

export default Credential