import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  

  return (
    <>
      <Home/>
    </>
  )
}

export default App
