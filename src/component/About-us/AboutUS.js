import axios from 'axios';
import React, { Component } from 'react'
import './about.css'
import Swal from 'sweetalert2';

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
  deletedata =(id) =>{
    
    //   .then((err)=>{
    //     console.log(err);
    //   })
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete('http://localhost:8080/User-detail/'+id)
            .then((res)=>{
              console.log("res");
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              this.componentDidMount()
            })
            
        }
      });
  }
  
  render() {
    return (
      <div>
        <div className="container-fluid " style={{marginTop:'3%'}}>
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
                  <th>Peform </th>
                  <th>action</th>
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
                      </td>
                      <td>
                       <a href="#" style={{marginLeft:'2%'}} className='btn btn-danger' onClick={()=>this.deletedata(item.id)}>Delete</a>
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
