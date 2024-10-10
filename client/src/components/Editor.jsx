import React from 'react'
import 'codemirror/lib/codemirror.css'

import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'
import { IoMdSettings } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import '../App.css'

const Editor = (props) => {
    const {icon,language, value, onChange}=props

    function handleChange(editing, data, value){
        onChange(value)
    }

    return (
    <div className='editorContainer'>
        <div className='title' style={{color:'#AAAEBC', fontSize:"16.5px"}}>
          <img src= {icon} style={{height:'10px', width:'10px'}}/>
        
            <button style={{backgroundColor:"#444857",margin:'0px 3px 0px 301px',padding:'2px 7px', height:'20px'}}><IoMdSettings style={{color:'white', backgroundColor:"#444857", fontSize:'12px',transform:'translateY(-7.5px)'}}/></button>
            <button style={{backgroundColor:"#444857",margin:'0px 3px 0px 0px', padding:'2px 7px', height:'20px'}}><IoChevronDown style={{color:'white', backgroundColor:"#444857", fontSize:'12px',transform:'translateY(-7.5px)'}}/></button>
       
           
        
        </div>
    <ControlledEditor 
    onBeforeChange={handleChange}
    value={value}
    className='editorSection'
    options={{
        lineWrapping:true,
        lint:true,
        mode:language,
       theme:"",
        lineNumbers:true,
       
    }}

  
    />
    </div>
  )
}

export default Editor
