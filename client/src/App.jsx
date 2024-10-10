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

function App() {
 
  return (
    <>
      <Home/>
      <div className='editorPart'>
       <Editor/>


       <Editor/>
       
       <Editor/>
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
