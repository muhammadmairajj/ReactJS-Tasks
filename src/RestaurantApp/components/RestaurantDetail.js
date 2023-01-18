import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RestaurantDetail() {
  const [restaurantData, setRestaurantData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await axios.get(`http://localhost:3000/restaurant/${id}`);
    setRestaurantData(result.data);
  };
  return (
    <div className="container py-4">
      <h1 className="display-4">Restaurant Detail</h1>
      <Link className="btn btn-success" to={"/list"} style={{float:"left"}}>
        Back To Home
      </Link>
      <h2 className="display-4">UserId: {restaurantData.id}</h2>
      <hr />
      <ul className="list-group w-50">
        {/* <li className="list-group item">Id: {restaurantData.id}</li> */}
        <li className="list-group-item">
          Restaurant_Name: {restaurantData.name}
        </li>
        <li className="list-group-item">
          Restaurant Rating: {restaurantData.rating}
        </li>
        <li className="list-group-item">
          Restaurant Email: {restaurantData.email}
        </li>
        <li className="list-group-item">
          Restaurant Location: {restaurantData.address}
        </li>
      </ul>
    </div>
  );
}

export default RestaurantDetail;
