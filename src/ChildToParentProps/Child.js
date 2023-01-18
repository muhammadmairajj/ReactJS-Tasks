import React, { useEffect } from 'react'

function Child(props) {
    const { callEvent, data } = props;

    const arr=["C++", "Java", "JavaScript", "python", "C", "C#"];
    const obj = {name:"MuhammadMairaj", designation:"MERNSTACK DEVELOPER", phone:"2222222"}

    useEffect(() => {
        callEvent(arr, obj);
    }, [data]);
  return (
    <div>
      <h1>This is a Child Component:</h1>
      <h4>{data}</h4>
    </div>
  )
}

export default Child
