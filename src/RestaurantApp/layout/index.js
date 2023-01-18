import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHome, faList, faSearch, faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"#"}>Restaurant App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>
            <FontAwesomeIcon icon={faHome} />Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/list"}>
            <FontAwesomeIcon icon={faList} />List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/create"}>
            <FontAwesomeIcon icon={faPlus} />Create</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/details"}>
            <FontAwesomeIcon icon={faEye} />Detail
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/update"}>
            <FontAwesomeIcon icon={faEdit} />Edit
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/search"}>
            <FontAwesomeIcon icon={faSearch} />Search</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar