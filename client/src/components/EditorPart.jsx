import React,{ useState,useEffect } from 'react'
import Split from 'react-split'
import '../App.css'
import Editor from './Editor'

function EditorPart() {
  const[html,setHtml]=useState('')
  const[css,setCss]=useState('')
  const[js,setJs]=useState('')
const [codes,setCodes]=useState('')

  useEffect(()=>{
    const timeout=setTimeout(() => {
      setCodes( `
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>`
      );
      
    },1000)
    return()=>clearTimeout(timeout)
  },[html,css,js])

  

  return (
    <>
    
     {/*  <div className='editorPart'> */}
      <Split
      className='split'
      sizes={[33.33,33.33,33.33]}
      direction='horizontal'
      gutterSize={1}
    
      >
       <Editor
       language="xml"
       icon="/"
       color="#f94449"
       paddingBottom="5px"
      
       languageName="HTML"
       value={html}
       onChange={setHtml}/>


       <Editor
       language="css"
       icon="*"
       color="#45b6fe"
       
       paddingTop="2.5px"
       languageName="CSS"
       value={css}
       onChange={setCss}/>
       
       <Editor
       language="javascript"
       icon="( )"
       color="#FFD300"
       paddingBottom="5px"
      
       languageName="JS"
       value={js}
       onChange={setJs}/>

</Split>
       
     {/*   </div> */}
      
       <div className='output'>
 
         <iframe 
         srcDoc={codes}
         title='output'
         
         sandbox="allow-scripts"
       
         width="100%"
         height="100%" style={{height:'124.7px'}}
         />
 
 
        
       </div>
     
    </>
  )
}

export default EditorPart
