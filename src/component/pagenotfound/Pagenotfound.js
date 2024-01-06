import React, { Component } from 'react'
import './page.css'
import asr from '../../assets/images/asr.jpeg'
export default class Pagenotfound extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid pg">
            <h1>404</h1>
            <p><span>Oops!</span> The page you are looking for might be in another galaxy.</p>
            <p>Let's get you back to <a href="/">home</a>.</p>
        </div>
      </div>
    )
  }
}
