import React, { useEffect, useState } from 'react'

function APICALL2() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
        .then(res => res.json())
        .then(data => setUserData(data))
        .catch(e => console.log(e));
    }, []);

    const PostAndPutEvent = () => {
        const data = {
            id: "aef128",
            name: "Mairaj",
            designation: "MERN STACK DEVELOPER",
            phone: "584832214",
            pin: 759155
        }
        const url = data.id ? "https://jsonplaceholder.typicode.com/users"+data.id : "https://jsonplaceholder.typicode.com/users"
        fetch(url, {
            method: data.id ? "PUT" : "POST",
            headers: {
                "Content-Type" : "application/json",
                "Access-Control-Allow-Origin:": "*",
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            console.log(res)
            if(res.status === 200) alert("Success");
        });
    }
  return (
    <div style={{ margin: "20px" }}>
      <h1>FETCH API CALL:</h1>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userData
            ? userData.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                  </tr>
                );
              })
            : "No DATA"}
        </tbody>
      </table>
      <button className='btn btn-primary' onClick={PostAndPutEvent}>Submit</button>
    </div>
  )
}

export default APICALL2