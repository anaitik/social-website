import React from 'react'
import "./css/navbar.css"
import { NavLink } from "react-router-dom"
import logo2 from "./images/logo-2.jpg"
import login from "./images/login.png"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo2} alt="logo" className='logo' />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item nav_li">
              <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item nav_li">
              <NavLink className="nav-link" to="/events">Events</NavLink>
            </li>
            <li className="nav-item nav_li">
              <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
            </li>
            <li className="nav-item nav_li">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            {/* <li className="nav-item nav_li">
              <NavLink className="nav-link" to="/people">People</NavLink>
            </li> */}
            <li className="nav-item nav_li">
              <NavLink className="nav-link" to="/login">
                {/* <span className="text-black">🔑</span> */}
                <img src={login} alt="" />
                Login</NavLink>
            </li>
            <li className="nav-item nav_li dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Language
              </NavLink>
              <ul className="dropdown-menu nav_ul" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item bg-white text-black" to="/">English</NavLink></li>
                <li><NavLink className="dropdown-item bg-white text-black" to="/">Hindi</NavLink></li>
                {/* <li><hr className="dropdown-divider" /></li> */}
                {/* <li><NavLink className="dropdown-item" to="/">Something else here</NavLink></li> */}
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar