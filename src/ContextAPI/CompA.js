import React, { useContext, useState } from 'react'
import CompB from './CompB';
import { CompContext } from './Context';

function CompA() {
    // const [users, seUsers] = useState([
    //     {
    //         "id": 1,
    //         "name": "Mairaj",
    //         "age" : 22,
    //         "designation": "Mern Stack Developer",
    //         "phone": "777-5557-111"
    //     },
    //     {
    //         "id": 2,
    //         "name": "Arsalan",
    //         "age" : 21,
    //         "designation": "Graphics Designer",
    //         "phone": "777-2251-555"
    //     },
    //     {
    //         "id": 3,
    //         "name": "Sufian",
    //         "age" : 22,
    //         "designation": "Java Developer",
    //         "phone": "777-4447-888"
    //     }
    // ]);
    const userData = useContext(CompContext);
    console.log(userData);
  return (
    <div>
      <h1>Component A</h1>
      {/* {
        console.log(userData)
      } */}
      {
        userData.map((data, index) => {
            return <div key={index}>{data.name}</div>
        })
      }
      <CompB />
    </div>
  )
}

export default CompA
