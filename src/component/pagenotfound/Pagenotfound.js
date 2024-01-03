import React, { Component } from 'react'
import './page.css'
export default class Pagenotfound extends Component {
  render() {
    return (
      <div>
        <div class="container">
            <h1>404</h1>
            <p>Oops! The page you are looking for might be in another galaxy.</p>
            <img src="space404.jpg" alt="Space 404 Image"/>
            <p>Let's get you back to <a href="/">home</a>.</p>
        </div>
      </div>
    )
  }
}
