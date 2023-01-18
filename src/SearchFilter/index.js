import React, { useEffect, useState } from "react";

function SearchFilter() {
  const [userData, setUserData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterData, setFilterData] = useState("");

  useEffect(() => {
    const getData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
          setSearchApiData(data);
        });
    };
    getData();
  }, []);

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setUserData(searchApiData);
    } else {
      const filterData = searchApiData.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.username.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if(filterData.length > 0) {
          setUserData(filterData);
      }else {
          setUserData([{name: "No Data"}]);
      }
    } 
    setFilterData(e.target.value);
  };
  return (
    <div>
      <h1>SearchFilter</h1>
      <div style={{ margin: "20px 20%" }}>
        <input
          type="search"
          placeholder="Enter Search"
          value={filterData}
          onChange={(e) => handleFilter(e)}
        />
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchFilter;
