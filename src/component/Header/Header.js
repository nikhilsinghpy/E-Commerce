import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';
import { IoSearch } from "react-icons/io5";
import './Header.css'
export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light  " >
          <div className="container-fluid">
            <Link className="navbar-brand " to="/"><img src={logo} alt="logo" width={'150'} height={'40'} style={{objectFit:'cover'}}/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Shop <span>All</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/men" aria-disabled="true">Men</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/women" aria-disabled="true">Women</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/trending" aria-disabled="true">Trending</Link>
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
