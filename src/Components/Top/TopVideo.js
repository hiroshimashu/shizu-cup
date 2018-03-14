import React, { Component } from 'react';
import Entry2 from '../../static/Entry2.svg';
import { Link } from 'react-router-dom';

class TopVideo extends Component {
    state = {
        url: 'https://s3-ap-northeast-1.amazonaws.com/collagewebsite/static/media/final_4th.mp4'
    }


    render() {
        return (
            <div style = {styles.videoWrapper} className="video-wrapper">
                <img className='entry-img' style = {styles.entry} src = {Entry2}/>
                <Link to = './entry'>
                   <div className = 'entry-main' style = {styles.entryMain}>
                       ENTRY
                   </div>
                </Link>

                <img style = {styles.video} className = 'top-video' src = 'https://s3-ap-northeast-1.amazonaws.com/collagewebsite/IMGP1992.JPG'/>
            </div>
        );
    }
}

const styles = {
    videoWrapper: {
        position: 'absolute',
        width: '100%',
        overflow: 'hidden',
        background: 'black',
        zIndex:-2
    },
    video: {
        position: 'absolute',
        width:'100%',
        zIndex: 0,
        opacity: 0.6,
        display: 'block'
    },
    entry: {
        position: 'absolute',
        zIndex: 2,
        height: 'auto',
        left:'50%',
        transform: 'translate(-50%, -50%)',
        opacity: '0.8'
    },
    entryMain: {
        position: 'absolute',
        zIndex: 2,
        height: 'auto',
        width: '300px',
        left:'50%',
        transform: 'translate(-50%, -50%)',
        opacity: '0.8',
        fontFamily: 'Share tech',
        fontSize: '4.0rem',
        color:'white',
        lineHeight: 1.0
    }
}

export default TopVideo;