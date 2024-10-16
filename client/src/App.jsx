import React,{ useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Editor from './components/Editor';
import './App.css'
import htmlIcon from './assets/htmlIcon.png'
import cssIcon from './assets/cssIcon.png'
import jsIcon from './assets/jsIcon.png'


function App() {
  const[html,sethtml]=useState('')
  const[css,setcss]=useState('')
  const[js,setjs]=useState('')

  return (
    <>
      <Home/>
      <div className='editorPart'>
       <Editor
       language="xml"
       icon={htmlIcon}
       languageName="HTML"
       value={html}
       onChange={sethtml}/>


       <Editor
       language="css"
       icon={cssIcon}
       languageName="CSS"
       value={css}
       onChange={setcss}/>
       
       <Editor
       language="javascript"
       icon={jsIcon}
       languageName="JS"
       value={js}
       onChange={setjs}/>
       </div>
       <div className='output'>
 
         <iframe title='output'
         sandbox="allow-scripts"
       
         width="100%"
         height="100%" style={{height:'124.7px'}}
         />
 
 
        
       </div>
      <Footer/>
    </>
  )
}

export default App
