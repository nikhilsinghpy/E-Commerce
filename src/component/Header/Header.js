import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './Header.css'
export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid" style={{display:'flex',justifyContent:'space-between',gap:'2rem'}}>
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About-us">Features</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact-us">Pricing</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
