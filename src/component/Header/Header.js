import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import './Header.css'
export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
          <div className="container-fluid">
            <Link className="navbar-brand " to="/"><p className='logo'>BIGZILLA</p></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="#" aria-disabled="true">Disabled</Link>
                </li>
              </ul>
              <div className="custom-search" >
                <div className="custom-search-container">
                  <input className="custom-search-input" type="search" placeholder="Something else find here :)" />
                  <button className="custom-search-button" type="submit"><IoSearch /></button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
