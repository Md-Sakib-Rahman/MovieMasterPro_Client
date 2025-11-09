import React, { useState } from 'react'
import { Context } from './Context'

const ContextProvider = ({children}) => {
  const [loader, setLoader] = useState(true)  
  const data = {
    loader,
    setLoader
  }  
  return (
    <Context value={data}>
        {children}
    </Context>
  )
}

export default ContextProvider
