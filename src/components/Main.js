import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PhotoLinks from './PhotoLinks';
import Header from './Header'
import VideoLinks from './VideoLinks'
import ReactPlayer from 'react-player'



class Main extends Component {


    render() {
        // console.log(this.props.photos);
        // console.log(this.props.videos)

        return (
            <div>
                <Switch>

                    <Route exact path="/photos" render={() => <PhotoLinks photos={this.props.photos} />} />
                    <Route exact path="/videos" render={() => <VideoLinks videos={this.props.videos} />} />


                </Switch>
            </div>
        )

    }

}






export default Main;

