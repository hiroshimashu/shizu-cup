import React from 'react';
import Teleshizu from '../static/tele_shizu.svg';

export default function Header() {
    return (
        <div style = {{
            position: 'fixed',
            backgroundColor:'#1d2431',
            top: 0,
            left: 0,
            width: '100%',
            height: '65px',
            zIndex: 1000
        }}>
           <img style = {{position: 'absolute', width: '60px', height: '60px', left: '15px',top: '2.5px' }} src = {Teleshizu}  />
        </div>

    );
}