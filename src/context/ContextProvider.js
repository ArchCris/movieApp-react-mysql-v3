import React, { useState } from 'react'
import { createContext } from 'react'

export const CredentialContext = createContext()

const ContextProvider = ({children}) => {

    const[credentialStatus,setCredentialStatus]=useState([{username:'cris'}])

  return (
    <CredentialContext.Provider value={{credentialStatus:credentialStatus,setCredentialStatus:setCredentialStatus}}>
        {children}
    </CredentialContext.Provider>
  )
}

export default ContextProvider