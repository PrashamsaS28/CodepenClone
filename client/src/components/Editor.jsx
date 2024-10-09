import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'


const Editor = (props) => {
    const {language,value, onChange}=props

    function handleChange(editing, data, value){
        onChange(value)
    }

    return (
    <div className='editor-container'>
    <ControlledEditor 
    onBeforeChange={handleChange}
    value={value}
    className='code-mirror-editor'
    options={{
        mode:language,
        theme:'material',
        lineNumbers:true,
        
    }}

  
    />
    </div>
  )
}

export default Editor
