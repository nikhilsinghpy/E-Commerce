import React, { Component } from 'react'
import './Contact-us.css'
export default class ContactUs extends Component {
  constructor(){
    super()
    this.state={
       f_name:'',
       E_id:'',
       mob_num:'',
       E_subject:'',
       messege:''
      }
  }
 
  savedata = (event) =>{
    event.preventDefault();
    console.log(this.state);
  }
  setname = (event) =>{
    // console.log(event.target.value);
    this.setState({f_name:event.target.value})
  }
  setE_id = (event) =>{
    this.setState({E_id:event.target.value})
  }
  setmon_num = (event) =>{
    this.setState({mob_num:event.target.value})
  }
  setE_subject = (event) =>{
    this.setState({E_subject:event.target.value})
  }
  setmessege = (event) =>{
    this.setState({messege:event.target.value})
  }
  render() {
    return (
      <div>
        <div className="container contact-us">
            <div className="container-contact-main">
            <h2 className="heading">Contact <span>US!</span></h2>
              <div className='contact'>
                  
                  <form onSubmit={this.savedata} method='post'>
                      <div className="contact-container">
                          <input type="text" name="f_name" id="" placeholder="Full Name" onChange={this.setname}/>
                          <input type="email" name="E_id" id="" placeholder="Email" onClick={this.setE_id}/>
                      </div>
                      <div className="contact-container">
                          <input type="tel" name="mob_num" id="" placeholder="Phone" onChange={this.setmon_num}/>
                          <input type="tel" name="E_subject" id="" placeholder="Email subject" onChange={this.setE_subject}/>
                      </div>
                      <textarea name="messege" id="" cols="30" rows="10" placeholder="Your Messege" onChange={this.setmessege}></textarea>
                      <input type="submit" value="Send Messege" className="btn"/>
                  </form>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
