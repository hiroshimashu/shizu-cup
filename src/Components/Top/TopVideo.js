import React, { Component } from 'react';

class TopVideo extends Component {
    state = {
        url: 'https://s3-ap-northeast-1.amazonaws.com/collagewebsite/static/media/final_4th.mp4'
    }


    render() {
        return (
            <div style = {styles.videoWrapper}>
                <img style = {styles.video} src = 'https://s3-ap-northeast-1.amazonaws.com/collagewebsite/IMGP1992.JPG'/>
            </div>
        );
    }
}

const styles = {
    videoWrapper: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: 'black'
    },
    video: {
        position: 'absolute',
        left: '182px',
        width:'100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.6,
        display: 'block'
    }
}

export default TopVideo;