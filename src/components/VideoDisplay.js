import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import VideoDetails from './VideoDetails'

class VideoDisplay extends Component {
    constructor (props) {
        super(props)
        this.state = ({
            showDetails: false

        })
    }

    handleClick = () => {
        this.setState(prevState => ({
            showDetails: !prevState.showDetails
        }))
          
    } 

    render() {
        
          
        return (
            <div className="video-display">
                {/* might need to add "playing" (without quotes to the end of the tag) */}
                <ReactPlayer url={this.props.video.videos.large.url} alt={this.props.video.tag} fluid={false} />
                <button onClick={this.handleClick}>CLICK TO SEE MORE</button>
                {this.state.showDetails && <VideoDetails video={this.props.video}/>}
                
            </div>
        )        
    }
}

export default VideoDisplay;
// replace with what's currently in return ()
{/* <div>
<ReactPlayer url={this.props.video.videos.large.url} alt={this.props.video.tag} loop="true" playing />
<button onClick={this.handleClick}>CLICK TO SEE MORE</button>
{this.state.showDetails && <VideoDetails video={this.props.video}/>}

</div> */}
