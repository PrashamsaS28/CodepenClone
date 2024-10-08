import React from 'react'
import logo from'../assets/codepenlogo2.png'
import { Link } from 'react-router-dom'
import { BsFillPencilFill } from "react-icons/bs";
import { IoIosCloud } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { RiSlideshowView } from "react-icons/ri";
import { MdViewSidebar } from "react-icons/md";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'black', padding:'3px 0px', borderBottom:"1px solid gray"}}>
    {/* <a className="navbar-brand" href={logo}>{logo}</a> */}
    <img src={logo} width="53" height="53" ></img>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto">
    <li className="nav-item d-flex flex-column ">
                           <h4 className='text-light' style={{fontSize:'18.2px',marginTop:'10px',fontWeight:'bold',fontFamily:'"Lato", "Lucida Grande", "Lucida Sans Unicode", Tahoma, Sans-Serif'}}>Untitled <BsFillPencilFill className='text-light' style={{height:'13px', width:'17px'}}/></h4>
                           <h6 className='text-muted '  style={{fontSize:'12.6px',fontFamily:'"Lato", "Lucida Grande", "Lucida Sans Unicode", Tahoma, Sans-Serif'}} >Captain Anonymous</h6>
                           </li>
                           </ul>
      <ul className="navbar-nav mr-auto">
        
      </ul>
      <form className="form-inline my-2 my-lg-0">
      <button type="button" className="btn btn my-2 my-lg-0 mx-lg-1.5 text-light" style={{position:'relative', margin:'1px 10px 1px 0px', padding:'10px 16px', backgroundColor:'#444857'}}>
                         <IoIosCloud style={{position:'relative',top:'2px'}}/>   Save
                            
                        </button>
                        <button type="button" className="btn btn my-2 my-lg-0 mx-lg-1.5 text-light" style={{position:'relative', margin:'1px 10px 1px 0px', padding:'10px 16px', backgroundColor:'#444857'}}>
                            <IoSettingsSharp style={{position:'relative',top:'2px', right:'5px'}}/>Settings
                            
                        </button>
                        <button type="button" className="btn btn my-2 my-lg-0 mx-lg-1.5 text-light" style={{position:'relative', margin:'1px 10px 1px 0px', padding:'10px 16px', backgroundColor:'#444857'}}>
                             <MdViewSidebar style={{ transform: 'rotate(-90deg)'}}/>
                         </button>
                         <button type="button" className="btn btn my-2 my-lg-0 mx-lg-1.5 text-dark" style={{position:'relative',fontSize:'15px', margin:'1px 0px',padding:'10px 16px', backgroundColor:'#47CF73' }}>
                            Sign Up
                            
                        </button>
                        <button type="button" className="btn btn my-2 my-lg-0 mx-lg-1.5 text-light" style={{position:'relative', fontSize:'15px', fontFamily:'"Lato", "Lucida Grande", "Lucida Sans Unicode", Tahoma, Sans-Serif', margin:'1px 0px 1px 7.5px', padding:'10px 16px', backgroundColor:'#444857' }}>
                            Log In
                            
                        </button>


</form>
    </div>
  </nav>
  )
}

export default Navbar
