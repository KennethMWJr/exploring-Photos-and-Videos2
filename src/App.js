import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import Nav  from './components/Nav'

const apiKey = '13787226-5bcddae04b6863621607f7b63';

const seePhotoData = `https://pixabay.com/api/?key=${apiKey}&q=yellow+flowers&image_type=photo`
const seeVideoData = `https://pixabay.com/api/videos/?key=${apiKey}&q=yellow+flowers`

console.log(seePhotoData);
console.log(seeVideoData);




function App() {
  return (
    <div className="App">
      <Nav />
      
    </div>
  );
}

export default () => (
  <Router>
    <App />
  </Router>
)
