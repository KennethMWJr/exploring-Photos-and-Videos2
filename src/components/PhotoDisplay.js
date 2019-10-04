import React, { Component } from 'react'
import PhotoDetails from './PhotoDetails'


class PhotoDisplay extends Component {
    constructor (props) {
        super(props)
        this.state = {
            showDetails: false
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            showDetails: !prevState.showDetails
        }))
    }

    render() {
    // "webformatURL" replaces largeImageURL if issue with size of photo.
        return ( 
            <div className="photo-display">
                <img src={this.props.photo.largeImageURL} alt={this.props.photo.tags[0]} />
                <div className="button">
                <button onClick={this.handleClick}>CLICK FOR INFO</button>
                </div> 
                {this.state.showDetails && <PhotoDetails photo={this.props.photo} />}

            </div>
        )
    }
}

export default PhotoDisplay;

