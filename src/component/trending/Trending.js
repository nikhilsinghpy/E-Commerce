import React, { Component } from 'react'
import './trend.css'
import ExProps from './ExProps';
import ExState from './ExState';

export default class Trending extends Component {
  constructor(props){
    super(props)
    // console.log(this.props);
    // console.log("this is a constructor")
  }
  render() {
    return (
      <div>
      <h4 className='text-center'>Trending section = this section is using props </h4>
        <div className="container card-container" style={{display:'flex'}}>
        <ExProps type="Men shirt" Price="300" Product="shirt"/>
        <ExProps type="Men shirt" Price="300" Product="shirt"/>
        <ExProps type="Men shirt" Price="300" Product="shirt"/>
        </div>
        <div className="container align-center">
          <div className="data-container">
            <h4>this data is using state</h4>
            <ExState/>
          </div>
        </div>
      </div>
    )
  }
}
