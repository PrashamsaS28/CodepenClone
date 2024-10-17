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
    const {languageName,icon,language, value, onChange, color,paddingBottom, paddingTop}=props

    function handleChange(editing, data,value){
        onChange(value)
    }

    return (
    <div className='editorContainer' >
        <div className='title' style={{display:'flex',alignItems:'center',justifyContent:'space-between', flexGrow:1}}>
          
          <div style={{display:'flex', alignItems:'center', flexGrow:1, maxWidth:'85px',color:'#AAAEBC', fontSize:"16.5px", backgroundColor:'#1f2024'}}>
          <span className='icon' style={{color:'black',display:'flex', justifyContent:'center',height:'18.5px', width:'18.5px', backgroundColor:color,margin:'5px 6.5px 5px 10px', alignItems:'center',borderRadius:'5px', paddingBottom:paddingBottom,paddingTop:paddingTop}}>{icon}</span>
        <span className='titleName' style={{fontWeight:'bold'}}>{languageName} </span>
        </div>
         
       
        <div style={{display:'flex', marginLeft:'auto'}}>
           
           <button className='btn btn' style={{backgroundColor:"#444857",margin:'0px 3px 0px 265px',padding:'2px 7px', height:'17px'}}><IoMdSettings style={{color:'white', backgroundColor:"#444857", fontSize:'12px',transform:'translateY(-6px)'}}/></button>
           <button className='btn btn' style={{backgroundColor:"#444857",margin:'0px 3px 0px 0px', padding:'2px 7px', height:'17px'}}><IoChevronDown style={{color:'white', backgroundColor:"#444857", fontSize:'12px',transform:'translateY(-6px)'}}/></button>
      
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
