import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Navbarr from './components/Navbarr';




function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Navbarr/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
