import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function RestaurantUpdate() {
  const [restaurantData, setRestaurantData] = useState({
    name: "",
    email: "",
    address: "",
    rating: "",
  });

  const { name, email, rating, address } = restaurantData;
  const onInputChange = (e) => {
    setRestaurantData({ ...restaurantData, [e.target.name]: e.target.value });
  };
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id)
  const onUpdateHandler = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/restaurant/${id}`, restaurantData)
    navigate('/list');
    alert("RestaurantData has been Updated");
  }

  useEffect(() =>{
    loadRestaurantData();
  }, []);

  const loadRestaurantData = async () => {
    const result = await axios.get(`http://localhost:3000/restaurant/${id}`)
    setRestaurantData(result.data);
  } 

  return (
    <div>
        <h1>RestaurantUpdate</h1>
        <form onSubmit={onUpdateHandler}>
        <label style={{ fontWeight: "bold" }}>Restaurant Name: &nbsp;</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onInputChange}
          placeholder="Restaurant Name"
        />{" "}
        <br />
        <br />
        <label style={{ fontWeight: "bold" }}>Restaurant Email: &nbsp;</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={onInputChange}
          placeholder="Restaurant Email"
        />{" "}
        <br />
        <br />
        <label style={{ fontWeight: "bold" }}>Restaurant Rating: &nbsp;</label>
        <input
          type="text"
          name="rating"
          value={rating}
          onChange={onInputChange}
          placeholder="Restaurant Rating"
        />{" "}
        <br />
        <br />
        <label style={{ fontWeight: "bold" }}>
          Restaurant Location: &nbsp;
        </label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={onInputChange}
          placeholder="Restaurant Address"
        />{" "}
        <br />
        <br />
        <input
          type="submit"
          value="Update Restaurant"
          className="btn btn-danger"
        />
      </form>
    </div>
  )
}

export default RestaurantUpdate