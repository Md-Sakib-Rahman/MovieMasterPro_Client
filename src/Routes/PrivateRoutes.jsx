import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import { Navigate } from 'react-router'

const PrivateRoutes = ({children}) => {
  const {user} = useContext(Context)  
  
  return user ? ( children ) :  (<Navigate to='/login'></Navigate>)
}

export default PrivateRoutes
