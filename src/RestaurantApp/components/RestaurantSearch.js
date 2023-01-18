import React, { useEffect, useState } from 'react'
import axios from "axios";

function RestaurantSearch() {
  const [query, setQuery] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    const result = await axios.get(`http://localhost:3000/restaurant?q=${query}`)
    // setRestaurantData(result.data);
    // console.log(result.data);

    if(query.length > 0 || query.length > 2) {
      fetchData();
      console.log(result.data);
    } else {
      setRestaurantData('');
    }
  }
  return (
    <div>
      <h1>Restaurant Search</h1>
      <input type="search" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
    </div>
  )
}

export default RestaurantSearch