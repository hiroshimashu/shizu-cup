import React, { Component } from 'react';
import TopVideo from './TopVideo';
import { Icon } from 'semantic-ui-react';
import  Logo  from '../../static/tele_shizu.svg'
import '../../index.css';


class KeyVisual extends Component {
    render() {
        return (
           <div style = {styles.keyVisual}  className = 'key-visual'>
               <TopVideo />
               <img style = {styles.logo} src = {Logo} alt = 'teleShizu' className="tele-shizu"/>
               <div className = 'scroll' style = {styles.scroll}>SCROLL</div>
               <Icon name = 'angle down' color = 'blue' size =  'huge' id = 'scroll-arrow' className='scroll-arrow' style = {styles.arrow}/>
           </div>
        );
    }
}

const styles = {
    keyVisual: {
        position: 'relative',
        zIndex: 11
    },
    logo: {
        position: 'absolute',
        width: '300px',
        left:'50%',
        top: '30%',
        transform: 'translate(-50%, -50%)'

    },
    scroll: {
        position: 'absolute',
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
        transform:'translateX(-50%)'
    }
}

export default KeyVisual;

