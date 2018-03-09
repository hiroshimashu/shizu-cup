import React, { Component } from 'react';
import KeyVisual from '../Components/Photos/KeyVisual_photos';
import Photos from '../Components/Photos/Photos';

class PhotoAlbumScreen extends Component {
    render() {
        return (
            <div className = 'photo-screen' style = {styles.content}>
                <KeyVisual />
                <Photos />
            </div>
        );
    }
}

const styles = {
    content: {
        position: 'relative',
        overflow: 'hidden',
        zIndex: 10
    }
}


export default PhotoAlbumScreen;