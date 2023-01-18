import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantLists from './components/RestaurantLists';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import Navbar from './layout';

function RoutesPath() {
  return (
    <div>
        <Router>
        <Navbar />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/list' element={ <RestaurantLists /> } />
                <Route path='/create' element={ <RestaurantCreate /> } />
                <Route path='/details/:id' element={ <RestaurantDetail /> } />
                <Route path='/update/:id' element={ <RestaurantUpdate /> } />
                <Route path='/search' element={ <RestaurantSearch /> } />
                <Route path='/login' element={ <Login /> } />
            </Routes>
        </Router>
    </div>
  )
}

export default RoutesPath