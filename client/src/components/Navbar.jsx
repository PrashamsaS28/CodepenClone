import React from 'react'
import logo from'../assets/codepenlogo2.png'
import { Link } from 'react-router-dom'
import { BsFillPencilFill } from "react-icons/bs";
import { IoIosCloud } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'black', paddingLeft:'0', paddingTop:'2px', paddingBottom:'2px'}}>
  
  <img src={logo} width="53" height="53" ></img>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item ">
                           <h4 className='text-light'>Untitled <BsFillPencilFill className='text-light' style={{height:'10px', width:'10px'}}/></h4><h6>Captain Anonymous</h6>
                           <button type="button" className="btn btn-secondary my-2 my-lg-0 mx-lg-2">
                            Save
                            
                        </button>
                         
                        <button type="button" className="btn btn-secondary my-2 my-lg-0 mx-lg-2">
                            Settings
                            
                        </button>
                          <button type="button" className="btn btn-success my-2 my-lg-0 mx-lg-2">
                            Sign Up
                            
                        </button>
                       
                        </li>
                        <li className="nav-item">
                       
                        <button type="button" className="btn btn-secondary my-2 my-lg-0 mx-lg-2">
                            Log In
                            
                        </button>
                       
                       
                        </li>
    </ul>
   
  </div>
</nav>
    </div>
  )
}

export default Navbar
