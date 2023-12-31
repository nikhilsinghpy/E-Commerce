import React, { Component } from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom'; 
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container-fluid bg-light">
            <div className="footer-link">
              <div className="logo">
                <Link to="/"><img src={logo} alt="logo" width={'150'} height={'40'} style={{objectFit:'cover'}}/></Link>
              </div>
            </div> 
            <div className="footer-link">
                <h4 className='footer-heading'>About-us</h4>
                <ul>
                  <li><Link className='sec-link' to="http://">Explore</Link></li>
                  <li><Link className='sec-link' to="http://">Learn More</Link></li>
                </ul>
            </div>
            <div className="footer-link">
              <h4 className='footer-heading'>Policies</h4>
              <ul>
                <li><Link className='sec-link' to="http://">Exchnage/Return Your order</Link></li>
                <li><Link className='sec-link' to="http://">Shipping Policy</Link></li>
                <li><Link className='sec-link' to="http://">Refund Policy</Link></li>
                <li><Link className='sec-link' to="http://">Terms and Conditions</Link></li>
                <li><Link className='sec-link' to="http://">Privacy Policy</Link></li>
                <li><Link className='sec-link' to="http://">Fraud Protection</Link></li>
              </ul>
            </div>
            <div className="footer-link">
              <div className="socials">
                <h4 className='footer-heading'>Follow us</h4>
                <ul>
                  <li><Link className='social-link' to="http://"><FaInstagram /></Link></li>
                  <li><Link className='social-link' to="http://"><FaFacebookSquare /></Link></li>
                  <li><Link className='social-link' to="http://"><FaXTwitter /></Link></li>
                  <li><Link className='social-link' to="http://"><FaYoutube /></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
