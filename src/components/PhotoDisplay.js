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
    // "webformatURL" replaces largeImageURL

        return ( 
            <div className="PhotoSiplay">
                <img src={this.props.photo.largeImageURL} alt={this.props.photo.tags[0]} />
                <button onClick={this.handleClick}>CLICK TO SEE MORE</button>
                {this.state.showDetails && <PhotoDetails photo={this.props.photo} />}

            </div>
        )
    }
}

export default PhotoDisplay;

