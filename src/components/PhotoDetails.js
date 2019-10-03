import React, { Component } from 'react';

class PhotoDetails extends Component {

    render() {
        console.log(this.props.photo)
        
        return(
            <div className="PhotoDetails">
                <p>Tags: {this.props.photo.tags}</p>
                <p># of Likes: {this.props.photo.likes}</p>
                <p># of Views: {this.props.photo.views}</p>  
                <p># of Downloads: {this.props.photo.downloads}</p>
            </div>
        )

    }

}



export default PhotoDetails; 