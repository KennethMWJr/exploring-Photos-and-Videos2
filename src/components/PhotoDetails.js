import React, { Component } from 'react';

class PhotoDetails extends Component {

    render() {
        
        return(
            <div className="photo-details">
                <p>Tags: {this.props.photo.tags}</p>
                <p># of Likes: {this.props.photo.likes}</p>
                <p># of Views: {this.props.photo.views}</p>  
                <p># of Downloads: {this.props.photo.downloads}</p>
                <p><a href={this.props.photo.pageURL}>Click Me For Source</a></p>
            </div>
        )

    }

}



export default PhotoDetails; 