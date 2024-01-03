import React, { Component } from 'react'

export default class ExState extends Component {
    constructor(props){
        super(props)
        this.state=[
            {
                id:1,
                name:"Nikhil",
                course:"Python full stack",
                time:"11:30am"
            },
            {
                id:2,
                name:"Nikhil",
                course:"Python full stack",
                time:"11:30am"
            },
            {
                id:3,
                name:"Nikhil",
                course:"Python full stack",
                time:"11:30am"
            }
        ]
    }
  render() {
    console.log(this.state)
    return (
      <div>
        <div className="container align-center">
            <ul>
                {
                    this.state.map((item,index)=>
                        <li key={index}>{item.name}{item.course}+{item.time}+{item.id}</li>
                    )
                }
            </ul>
        </div>
      </div>
    )
  }
}
