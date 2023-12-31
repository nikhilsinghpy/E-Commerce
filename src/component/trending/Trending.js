import React, { Component } from 'react'

export default class Trending extends Component {
  constructor(props){
    super(props)
    console.log(this.props);
    console.log("this is a constructor")
  }
  render() {
    return (
      <div>
      Trending
      </div>
    )
  }
}
