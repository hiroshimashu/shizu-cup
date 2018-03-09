import React from 'react';
import CoverPhoto from './CoverPhoto';

export default function KeyVisualRule() {
    return (
        <div className = 'key-visual' style = {{
            position: 'relative',
            zIndex: 11,
            height: '70vh',
            marginBottom: '50px'
        }}>
            <CoverPhoto />
            <div style = {styles.header}>
                <div className = 'en' style = {styles.en}>RULES</div>
                <div className = 'jp' style = {styles.jp}>大会ルール</div>
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