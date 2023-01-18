import React from 'react'
import CompA from './CompA'
import CompD from './CompD'
import { ContextProvider } from './Context'

function ContextAPI() {
  return (
    <ContextProvider>
      <div>
        <CompA />
        <CompD />
    </div>
    </ContextProvider>
  )
}

export default ContextAPI