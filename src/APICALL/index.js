import React, { useEffect, useState } from "react";

// Fetch method Api Call in React js with GET | PUT | POST
function APICALL() {
  const [userData, setUserData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url, {
      headers: {
        companyId: "5954241235781263",
      }
    })
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((e) => console.log(e));
  }, []);

  const PostAndPutEvent = () => {
    const data = {
      id: "m145a",
      name: "Muhammad Mairaj",
      mobile: "221452536",
      designation: "MERNSTACK DEVELOPER",
      pin: "75912",
    };
    const url = data.id
      ? "https://jsonplaceholder.typicode.com/comments/" + data.id
      : "https://jsonplaceholder.typicode.com/comments";
    fetch(url, {
      method: data.id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin:": "*",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        if (res.state === 200) { 
          alert("Success");
        }
      })
      .catch((e) => console.log("e", e));
  };

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
        <button onClick={PostAndPutEvent}>Submit</button>
      </table>
    </div>
  );
}

export default APICALL;
