import React, { useState } from "react";

function SearchFilter() {
  const [arrData, setArrData] = useState([
    {
      id: 1,
      name: "Ram",
      rollNo: 2,
      phoneNo: "765656565",
    },
    {
      id: 2,
      name: "Sham",
      rollNo: 3,
      phoneNo: "78676767676",
    },
    {
      id: 3,
      name: "Pari",
      rollNo: 4,
      phoneNo: "65656656565",
    },
    {
      id: 5,
      name: "Nikita",
      rollNo: 5,
      phoneNo: "6565445454",
    },
    {
      id: 1,
      name: "Ram",
      rollNo: 2,
      phoneNo: "765656565",
    },
    {
      id: 2,
      name: "Sham",
      rollNo: 3,
      phoneNo: "78676767676",
    },
    {
      id: 3,
      name: "Pari",
      rollNo: 4,
      phoneNo: "65656656565",
    },
    {
      id: 5,
      name: "Nikita",
      rollNo: 5,
      phoneNo: "6565445454",
    },
    {
      id: 1,
      name: "Ram",
      rollNo: 2,
      phoneNo: "765656565",
    },
    {
      id: 2,
      name: "Sham",
      rollNo: 3,
      phoneNo: "78676767676",
    },
    {
      id: 3,
      name: "Pari",
      rollNo: 4,
      phoneNo: "65656656565",
    },
    {
      id: 5,
      name: "Nikita",
      rollNo: 5,
      phoneNo: "6565445454",
    },
  ]);

  const onChangeHandler = (e) => {
    if (e.target.value === "") {
      window.location.reload(true);
      const tempArr = arrData;
      setArrData(tempArr);
      return;
    }

    const searchData = arrData.filter((item) =>
      item.name.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
      item.phoneNo.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setArrData(searchData);
  };

  return (
    <div>
      <h1>Search Filter</h1>
      <input type="search" onChange={onChangeHandler} placeholder="Search Here" />
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>RollNo</th>
            <th>PhoneNo</th>
          </tr>
        </thead>
        <tbody>
          {arrData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.rollNo}</td>
                <td>{data.phoneNo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SearchFilter;
