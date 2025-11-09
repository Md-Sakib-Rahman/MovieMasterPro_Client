import React, { useState } from 'react'
import { Context } from './Context'

const ContextProvider = ({children}) => {
  const [theme, setTheme] = useState()  
  const data = {

  }  
  return (
    <Context value={data}>
        {children}
    </Context>
  )
}

export default ContextProvider
