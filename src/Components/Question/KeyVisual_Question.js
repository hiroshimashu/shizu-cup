import React from 'react';
import CoverPhoto from './CoverPhoto';

export default function KeyVisualQuesiton() {
    return (
        <div className = 'key-visual' style = {{
            position: 'relative',
            zIndex: 11,
            height: '70vh',

        }}>
            <CoverPhoto />
            <div style = {styles.header}>
                <h5 className = 'en' style = {styles.en}>Q&A</h5>
                <div className = 'jp' style = {styles.jp}>よくある質問</div>
            </div>
        </div>
    );
}

const styles = {
    header: {
        position: 'absolute',
        top: '40%',
        left: '2%',
        lineHeight: '1.05',
        textAlign:'left',
        fontFamily: 'Share Tech'
    },
    en: {
        fontSize: '2.5rem',
        letterSpacing: '.08em',
        color: 'white',
        marginBottom: '5px'
    },
    jp: {
        fontSize: '0.8rem',
        letterSpacing: '.05em',
        color: 'white',
    }
}