import React, { Component } from 'react'
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default class Tdata extends Component {
  render() {
    return (
      <div>
        <div className="container card-container" >
            <div class="card" style={{width:'18rem'}}>
              <img src={logo} class="card-img-top" alt="card-image"/>
              <div class="card-body">
                <h5 class="card-title">cloth:type {this.props.type}</h5>
                <p class="card-text">Price{this.props.price}</p>
                <p class="card-text">Product {this.props.Product}</p>
                <Link to="*" class="btn btn-primary">ADD TO CART</Link>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
