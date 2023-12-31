import React, { Component } from 'react'
import Trending from '../trending/Trending'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
        <Trending type="Men" price ="4500" Prouduct="shirt"/>
      </div>
    )
  }
}
