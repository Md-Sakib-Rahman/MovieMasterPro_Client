import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import { Navigate, useLocation } from 'react-router'

const PrivateRoutes = ({children}) => {
  const {user , loader} = useContext(Context)  
  const location = useLocation();
  if (loader) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <span className="loading loading-spinner text-warning w-10"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />
}

export default PrivateRoutes
