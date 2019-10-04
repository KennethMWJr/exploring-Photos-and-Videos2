import React, { Component } from 'react'; 



class VideoDetails extends Component {
 

    render() {
    
        return(
            <div> 
                <p>Tags: {this.props.video.tags}</p>
                <p># of Likes: {this.props.video.likes}</p>
                <p># of Views: {this.props.video.views}</p>  
                <p># of Downloads: {this.props.video.downloads}</p>
                <p><a href={this.props.video.pageURL}>Click Me For Source</a></p>
                {/* do the same for photos */}

            </div>
        )
    }
}
export default VideoDetails; 