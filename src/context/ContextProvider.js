import React, { useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'

export const CredentialContext = createContext()

const ContextProvider = ({children}) => {

  axios.defaults.withCredentials=true

  const[credentialStatus,setCredentialStatus]=useState(null)

  return (
    <CredentialContext.Provider value={{credentialStatus:credentialStatus,setCredentialStatus:setCredentialStatus}}>
        {children}
    </CredentialContext.Provider>
  )
}

export default ContextProvider