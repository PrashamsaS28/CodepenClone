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
    const {languageName,icon,language, value, onChange}=props

    function handleChange(editing, data, value){
        onChange(value)
    }

    return (
    <div className='editorContainer' >
        <div className='title' style={{display:'flex',color:'#AAAEBC', fontSize:"16.5px", backgroundColor:'#1f2024', alignItems:'center',justifyContent:'space-between', maxWidth:'85px',flexGrow:1}}>
          
          <div style={{display:'flex', alignItems:'center', flexGrow:1}}>
          <img src= {icon} style={{height:'18.5px', width:'18.5px', margin:'5px 6.5px 5px 10px'}}/>
        <span className='titleName' style={{fontWeight:'bold'}}>{languageName} </span>
        </div>
         
       
        <div style={{display:'flex', marginLeft:'auto'}}>
           
           <button style={{backgroundColor:"#444857",margin:'0px 3px 0px 265px',padding:'2px 7px', height:'20px'}}><IoMdSettings style={{color:'white', backgroundColor:"#444857", fontSize:'12px',transform:'translateY(-7.5px)'}}/></button>
           <button style={{backgroundColor:"#444857",margin:'0px 3px 0px 0px', padding:'2px 7px', height:'20px'}}><IoChevronDown style={{color:'white', backgroundColor:"#444857", fontSize:'12px',transform:'translateY(-7.5px)'}}/></button>
      
           </div>  
            
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
