import React, {Component} from 'react'
import PhotoDisplay from './PhotoDisplay'




class PhotoLinks extends Component {

    render() {
      
        return(
            <div className="PhotoLinks">
                {this.props.photos.map((photo, i) => (
                    <div key={i}>
                    <PhotoDisplay photo={photo} />
                    </div>
                ))}   
            </div>
        )
    }
}



export default PhotoLinks; 
