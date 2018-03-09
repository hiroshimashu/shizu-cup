import React, { Component } from 'react';
import TopVideo from './TopVideo';
import { Icon } from 'semantic-ui-react';
import '../../index.css';


class KeyVisual extends Component {
    render() {
        return (
           <div style = {styles.keyVisual}  className = 'key-visual'>
               <TopVideo />
               <div className = 'scroll' style = {styles.scroll}>SCROLL</div>
               <Icon name = 'angle down' color = 'blue' size =  'huge' id = 'scroll-arrow' style = {styles.arrow}/>
           </div>
        );
    }
}

const styles = {
    keyVisual: {
        position: 'relative',
        height: '100vh',
        zIndex: 11
    },
    scroll: {
        position: 'absolute',
        top: '92vh',
        left:'50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
        fontFamily: "Share Tech, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, Meiryo, 游ゴシック, Yu Gothic, 游ゴシック体, YuGothic, ＭＳ Ｐゴシック, MS PGothic, sans-serif",
        lineHeight: 1.6,
        textSizeAdjust: '100%',
        color: 'yellow'
    },
    arrow: {
        position: 'absolute',
        zIndex:1,
        left: '50%',
        top: '93vh',
        transform:'translateX(-50%)'
    }
}

export default KeyVisual;

