import React, { useState } from 'react'

function SearchFilter2() {
    const [userData, setUserData]  = useState([]);
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

    const handleSearchData = (e) => {
        if(e.target.value === "") {
            setUserData(userData);
        } else {
            const filterResult = searchApiData.filter((item) => {
                item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                item.username.toLowerCase().includes(e.target.value.toLowerCase()); 
            });
            // setUserData(filterResult);
            if(filterResult.length > 0) {
                setUserData(filterResult);
            } else {
                setUserData([{name: "No Data"}]);
            }
        }
        setFilterData(e.target.value);
    }
  return (
    <div>
        <div>
            <input type="search" placeholder='Enter Search Here'
            value={filterData} onChange={(e) => handleSearchData(e)}
            />
        </div>
        <h1>SearchFilter2</h1>

        <table>
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
  )
}

export default SearchFilter2