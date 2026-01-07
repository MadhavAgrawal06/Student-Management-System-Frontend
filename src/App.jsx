
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home.jsx";
import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact.jsx';
import Data from "./components/Data.jsx";

import ShowAll from "./components/ShowAll";
import ShowOne from "./components/ShowOne";
import Add from "./components/Add";
import Delete from "./components/Delete";
import Update from "./components/Update";

import "./App.css";

function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/data" element={<Data/>}/>
      <Route path="/contact" element={<Contact/>}/>
      
      <Route path="/showAll" element={<ShowAll/>}/>
      <Route path="/showOne" element={<ShowOne/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/update" element={<Update/>}/>
      <Route path="/delete" element={<Delete/>}/>

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
