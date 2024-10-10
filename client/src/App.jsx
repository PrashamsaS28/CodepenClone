import React,{ useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Editor from './components/Editor';

function App() {
 

  return (
    <>
      <Home/>
      <div className='editor'>
       <Editor/>


       <Editor/>
       
       <Editor/>
       </div>
       <div className='output'>
 
       
 
        
       </div>
      <Footer/>
    </>
  )
}

export default App
