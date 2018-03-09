import React from 'react';
import photo from '../../static/cover_photo2.JPG';


export default function CoverPhoto() {
    return (
        <div className = 'cover-photo' style = {styles.coverPhoto}>
            <img alt = "cover" src = {photo} style = {styles.photo}/>
        </div>
    )
}

const styles = {
    coverPhoto: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: 'black',
        zIndex: 0
    },
    photo: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.6,
        display: 'block'
    }
}