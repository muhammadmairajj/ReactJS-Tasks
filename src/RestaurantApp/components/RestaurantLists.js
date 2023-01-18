import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function RestaurantLists() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const result = await axios.get("http://localhost:3000/restaurant");
    // console.log(result.data);
    setListData(result.data);
  }

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:3000/restaurant/${id}`)
    getData();
    alert("RestaurantData has been Deleted");
  }
  return (
    <div>
        <h1>Restaurant Lists</h1>
        <br />
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>#</th>
              <th>Restaurant_Name</th>
              <th>Rating</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          {
            listData.length > 0 ? 
            listData.map((item) => (
              <tbody key={item.id}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.rating}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>
                    <Link to={`/update/${item.id}`}>
                    <FontAwesomeIcon icon={faPenToSquare} color="orange" /></Link>
                    {" "}
                    <Link to={`/details/${item.id}`}>
                    <FontAwesomeIcon icon={faEye} /></Link>
                    {" "}
                    <Link onClick={() => deleteData(item.id)}>
                    <FontAwesomeIcon icon={faTrash} color="red" /></Link>
                  </td>
                </tr>
              </tbody>
            ))
            : <p className='text-center'>Please Wait...</p>
          }
        </table>
    </div>
  )
}

export default RestaurantLists;