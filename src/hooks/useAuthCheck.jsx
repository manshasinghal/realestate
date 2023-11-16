import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

const useAuthCheck = () => {
   
    const {isAuthenticated} = useAuth0()
    const validateLogin = () =>{
         if(!isAuthenticated)
         {
            toast.error('you must be logged in',{position:"bottom-right"})
            return false
         }else return true;
    }
  return (
    {
        validateLogin
    }
  )
}

export default useAuthCheck