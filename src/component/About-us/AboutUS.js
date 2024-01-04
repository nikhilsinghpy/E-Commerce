import axios from 'axios';
import React, { Component } from 'react'

export default class AboutUS extends Component {
  constructor(){
    super()
    this.state ={userdata:[]};

  }
  componentDidMount() {
    axios.get('http://localhost:8080/User-detail')
      .then((res) =>this.setState({userdata:res.data}))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  render() {
    return (
      <div>
        <div className="container " style={{marginTop:'3%'}}>
          <div className="row">
            <div className="col-md-12">
            <table class="table  table-secondary">
              <thead>
                <tr>
                  <th>USER-ID</th>
                  <th>NAME</th>
                  <th>MOBILE</th>
                  <th>EMAIL</th>
                  <th>EMAIL-SUBJECT</th>
                  <th>MESSEGE</th>
                  <th>Peform action</th>
                </tr>
              </thead>
              <tbody>
                  {this.state.userdata.map((item, index) => (
                    <tr key={index} className="table-active">
                      <td>{item.id}</td>
                      <td>{item.f_name}</td>
                      <td>{item.E_id}</td>
                      <td>{item.mob_num}</td>
                      <td>{item.E_subject}</td>
                      <td>{item.messege}</td>
                      <td >
                        <a href="#" className='btn btn-success'>Update</a>
                        <a href="#" style={{marginLeft:'2%'}} className='btn btn-danger'>Delete</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
