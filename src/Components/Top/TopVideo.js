import React, { Component } from 'react';
import Entry from '../../static/ENTRY.svg';

class TopVideo extends Component {
    state = {
        url: 'https://s3-ap-northeast-1.amazonaws.com/collagewebsite/static/media/final_4th.mp4'
    }


    render() {
        return (
            <div style = {styles.videoWrapper}>
                <img style = {styles.entry} src = {Entry} alt = 'entry' />
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
        backgroundColor: 'black',
        zIndex:-2
    },
    video: {
        position: 'absolute',
        width:'100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.6,
        display: 'block'
    },
    entry: {
        position: 'absolute',
        zIndex: 2,
        width: '505px',
        height: '163px',
        left:'50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: '0.8'
    }
}

export default TopVideo;