import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import VideoDisplay from './VideoDisplay'

class VideoLinks extends Component {



    render() {

        return (

            <div>
                {this.props.videos.map((video, i) => (
                    <div key={i}>
                    <VideoDisplay video={video} />
                    </div>
                ))}
                
            </div>
        )
    }
}



export default VideoLinks; 