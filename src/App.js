import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route, Link } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<News key="general" pageSize={5} category="general" country="in" />} />
          <Route path="/business" element={<News key="business" pageSize={5} category="business" country="in" />} />
          <Route path="/entertainment" element={<News key="entertainment"  pageSize={5} category="general" country="in" />} />
          <Route path="/health" element={<News key="health" pageSize={5} category="health" country="in" />} />
          <Route path="/science" element={<News key="science" pageSize={5} category="science" country="in" />} />
          <Route path="/sports" element={<News key="sports" pageSize={5} category="sports" country="in" />} />
          <Route path="/technology" element={<News key="technology" pageSize={5} category="technology" country="in" />} />
      </Routes>

      </div>
    )
  }
}



