import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PhotoLinks from './PhotoLinks';
import Header from './Header'
import VideoLinks from './VideoLinks'
import ReactPlayer from 'react-player'
import Home from './Home'

class Main extends Component {


    render() {
   

        return (
            <div className="Main">
                <Switch>
                    
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/photos" render={() => <PhotoLinks photos={this.props.photos} />} />
                    <Route exact path="/videos" render={() => <VideoLinks videos={this.props.videos} />} />


                </Switch>
            </div>
        )

    }

}






export default Main;

