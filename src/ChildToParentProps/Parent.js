import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const [name, setName] = useState("Mairaj");
    const [dataArr, setDataArr] = useState([]);
    const [objData, setObjData] = useState({});

    const callEvent = (arr, obj) => {
        console.log(arr, obj);
        setDataArr(arr);
        console.log(obj.name);
        console.log(obj.designation);
        console.log(obj.phone);
        setObjData(obj);
    }
  return (
    <div>
        <h1>Parent Component</h1>

        <Child data={name} callEvent={callEvent} />
        {dataArr || dataArr.length>0 || dataArr !== undefined || dataArr !== "undefined" ?
        dataArr.map((item, index) => {
            return <div key={index}>{item}</div>
        }) 
        : ""
        }

        <ul>
            <li><h2>{objData.name}</h2></li>
            <li><h2>{objData.designation}</h2></li>
            <li><h2>{objData.phone}</h2></li>
        </ul>
    </div>
  )
}

export default Parent