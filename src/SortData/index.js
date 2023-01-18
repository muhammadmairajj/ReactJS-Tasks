import React, { useEffect, useReducer, useState } from 'react'

function AscendingOrder() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const filteredData = () => {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                const result =  data.sort((a,b) => a.name.localeCompare(b.name))
                setUserData(result);
            })
        }
        filteredData();
    }, []);
  return (
    <div>
        <h1>Data Sorting In Ascending Order</h1>
        <ul>
            {userData ? userData.map((item) => {
                return (
                    <div>  
                    <li>{item.id}</li>
                    <li>{item.name}</li>
                </div>
            )
            }) : "No Data" }
        </ul>
    </div>
  )
}

export default AscendingOrder