import React, { Component } from 'react'


class PhotoDisplay extends Component {

    render() {

        const photos = this.props.photos.map((photo, i) => {
            return (
                <img key={i} src={photo.largeImageURL} alt={photo.tags[0]} />
            )
        })
        return (
            <div>
                {photos}
            </div>
        )
    }
}

export default PhotoDisplay;

