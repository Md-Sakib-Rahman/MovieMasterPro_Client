import React from 'react'
import ErrorPng from '../assets/error.png'
import { Link } from 'react-router';
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <img 
        src={ErrorPng} 
        alt="Page not found" 
        className="w-1/2 max-w-md" 
      />
      
      <h2 className="text-3xl font-bold">Oops! Page Not Found</h2>
      <p className="text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>

      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  )
}

export default ErrorPage
