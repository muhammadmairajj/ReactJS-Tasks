import React from 'react'
import CompC from './CompC'

function CompB(props) {
    
  return (
    <div>
      <h1>Component B</h1> 
      {/* {
        props.data.map((data) => {
            return <div>{data.phone}</div>
        })
      }
      <CompC data={props} />  */}
    </div>
  )
}

export default CompB
