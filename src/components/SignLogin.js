import React, { useState } from 'react'
import axios from 'axios'
import '../styles/SignLogin.css'
import { CredentialContext } from '../context/ContextProvider'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'


const SignLogin = () => {

    //Credential from context
    const{setCredentialStatus}=useContext(CredentialContext)
    
    //Turn on credentials
    axios.defaults.withCredentials=true
    
    //Sign up states
    const[signName,setSignName]=useState(null)
    const[signPassword,setSignPassword]=useState(null)
    const[signMessage,setSignMessage]=useState(null)

    const handleSignUp = () => {
        axios.post(`${process.env.REACT_APP_LOCAL_URL}/signup`,{username:signName,password:signPassword},{ withCredentials: true })
        .then(resp=>{
            if(resp.data.message){
                setSignMessage(resp.data.message)
            }else{
                setSignMessage(resp.data.sqlMessage)
            }
        }).catch(error=>{
            console.log(error)
        })
    }

    //Log in states
    const[logName,setLogName]=useState(null)
    const[logPassword,setLogPassword]=useState(null)
    const[loginMessage,setLoginMessage]=useState(null)

    const handleLogIn = () => {
        axios.post(`${process.env.REACT_APP_LOCAL_URL}/login`,{username:logName,password:logPassword},{ withCredentials: true })
        .then(resp=>{
            if(resp.data.loggedIn===true){
                setLoginMessage('User logged')
                setCredentialStatus(resp.data)
            }
            setLoginMessage(resp.data.message)
        }).catch(error=>{
            console.log(error)
        })
    }


  return (
    <div className='SignLogin__conteiner-out'>
        <h1>Welcome th the movie APP &#127909;</h1>
        <div className='SignLogin__conteiner'>
            <div className='signUp__section'>
                <h3>Sign Up <FontAwesomeIcon icon={faPen} size='xl' /></h3>
                <label>Name:</label>
                <input onChange={(e)=>{setSignName(e.target.value)}} type='text' required></input>
                <label>Password:</label>
                <input onChange={(e)=>{setSignPassword(e.target.value)}} type='password' required></input>
                <p className='signUp__message'>{signMessage}</p>
                <button onClick={()=>handleSignUp()}>Sign up</button>
            </div>
            <div className='signUp__section'>
                <h3>Log In <FontAwesomeIcon icon={faRightToBracket} size='xl' /></h3>
                <label>Name:</label>
                <input onChange={(e)=>{setLogName(e.target.value)}} type='text' required></input>
                <label>Password:</label>
                <input onChange={(e)=>{setLogPassword(e.target.value)}} type='password' required></input>
                <p className='signUp__message'>{loginMessage}</p>
                <button onClick={()=>handleLogIn()}>Log in</button>
            </div>
        </div>
    </div>
  )
}

export default SignLogin