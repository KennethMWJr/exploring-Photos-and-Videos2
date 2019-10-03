import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import Nav  from './components/Nav'
import Header from './components/Header'
import Main from './components/Main'
import Home from './components/Home'
import ReactPlayer from 'react-player'
import Footer from './components/Footer'

const apiKey = '13787226-5bcddae04b6863621607f7b63';

const seePhotoData = `https://pixabay.com/api/?key=${apiKey}&q=yellow+flowers&image_type=photo`
const seeVideoData = `https://pixabay.com/api/videos/?key=${apiKey}&q=yellow+flowers`



class App extends Component {
  constructor() {
    super()
    this.state = ({
      photos: [],
      videos: []
    })
    this.componentDidMount = this.componentDidMount.bind(this)
  }




async componentDidMount() {
    const photoInfo = await axios.get(seePhotoData)
    const photos = photoInfo.data.hits
     console.log(photoInfo)
    let videoInfo = await axios.get(seeVideoData)
    const videos = videoInfo.data.hits
    // console.log(videoInfo); 
    this.setState({
      photos: photos,
      videos: videos
      
    })
     console.log(photos)
     console.log(videos)  
    
  }
  
  
  




render() {
  
  return (
    <div className="App">
      <Header />
        <div className="container">
          <Main photos={this.state.photos} videos={this.state.videos} />   
        </div>
      <Footer /> 
      
    </div>
  );
}
}

export default () => (
  <Router>
    <App />
  </Router>
)
