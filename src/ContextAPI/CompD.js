import React, { useContext } from 'react'
import { CompContext } from './Context'

function CompD() {
  const contextData = useContext(CompContext);
    console.log("contextData", contextData);
  return (
    <div>
      <h1>Component D</h1>  
      {
        contextData.map((data, index) => {
            return <div key={index}>{data.designation}</div>
        })
      }
    </div>
  )
}

export default CompD
