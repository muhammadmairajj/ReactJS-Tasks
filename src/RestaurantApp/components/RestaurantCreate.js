import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RestaurantCreate() {
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
  const navigate = useNavigate();
  // useEffect(() => {
  //   postData();
  // }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log("RestaurantData ->> ", restaurantData);
    postData(name, email, address, rating);
    alert("Restaurant has been added");
    navigate('/list');
    // setRestaurantData('');
  };
  const postData = async (name, email, address, rating) => {
    const result = await axios.post("http://localhost:3000/restaurant", {
      name: name,
      email: email,
      rating: rating,
      address: address,
    });
    // .then(res => setRestaurantData([res.data, ...restaurantData]))
    setRestaurantData(result.data);
    setRestaurantData("");
    // console.log(result.data);
  };
  return (
    <div>
      <h1>Restaurant Create</h1>
      <br />
      <form onSubmit={onSubmitHandler}>
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
          value="Add Restaurant"
          className="btn btn-danger"
        />
      </form>
    </div>
  );
}

export default RestaurantCreate;
