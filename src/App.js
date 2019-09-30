import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import Nav  from './components/Nav'
import Header from './components/Header'
import Main from './components/Main'

const apiKey = '13787226-5bcddae04b6863621607f7b63';

const seePhotoData = `https://pixabay.com/api/?key=${apiKey}&q=yellow+flowers&image_type=photo`
const seeVideoData = `https://pixabay.com/api/videos/?key=${apiKey}&q=yellow+flowers`

// console.log(seePhotoData);
// console.log(seeVideoData);

class App extends Component {
  constructor() {
    super()
    this.state = {
      photos: [],
      videos: []
    }
  }



async componentDidMount() {
    const photoInfo = await axios.get(seePhotoData)
    console.log(photoInfo)
    let videoInfo = await axios.get(seeVideoData)
    console.log(videoInfo); 
    this.setState({
      photos: photoInfo.data.hits
      videos: videoInfo.data.hits
      
    })
    console.log(photoInfo.data.hits)
    console.log(videoInfo.data.hits)  
    
  }
  
  
  




render() {
  return (
    <div className="App">
      <Header />
      
      
      
    </div>
  );
}
}

export default () => (
  <Router>
    <App />
  </Router>
)
