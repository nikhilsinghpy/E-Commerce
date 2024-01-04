import React, { Component } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { productdata: [] };                       //this section is using api to display the data where the we are using a fat
  }                                                         // arrow function and in the function  we use fetch key keyword to get data the data form api                

  getdatabyapi = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => this.setState({ productdata: data }));

  };
  componentDidMount(){                                                 //The componentDidMount method is used to make an asynchronous call to an API 
                                                                        //  (using the fetch function). This is a common use case for componentDidMount 
                                                                        //since it's the appropriate place to initiate data fetching operations that don't 
                                                                        //need to block the initial rendering
    this.getdatabyapi();
  }
  
  render() {
    function truncateDescription(description, wordLimit) {
      const words = description.split(' ');
      const truncatedWords = words.slice(0, wordLimit);
      const truncatedDescription = truncatedWords.join(' ');
      return truncatedDescription;
    }    
    return (
      <div>
        <div className="container-fluid homepage">
          <div className="row">
            {this.state.productdata.map((item, index) => (
              <div className="product-card" key={index} style={{width:'380px'}}>
                  <div className="badge">Hot</div>
                  <div className="product-tumb">
                    <img src={item.image} alt=""/>
                  </div>
                  <div className="product-details">
                    <span className="product-catagory">{item.category}</span>
                    <h4><Link to="">{truncateDescription(item.title,4)}</Link></h4>
                    <p>{truncateDescription(item.description, 10)}</p>
                    <div className="product-bottom-details">
                      <div className="product-price">${item.price}</div>
                      <div className="product-links">
                        <a href="/">{item.rating.rate}</a>
                        <button className='my-btn'>Add to Cart</button>
                      </div>
                    </div>
                  </div>
              </div> 
            ))}
          </div>
        </div>
        {/* <input type="submit" value="get data" onClick={this.getdatabyapi} /> */}
      </div>
    );
  }
}
