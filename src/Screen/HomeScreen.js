import React, { Component } from 'react';
import Main from './Main';
import KeyVisual from '../Components/Top/KeyVisual';
import Sponsors from '../Components/Sponsors';

class HomeScreen extends Component {
    render() {
        return (
            <div className = "home" style = {styles.content}>
                <KeyVisual />
                <Main />
                <Sponsors />
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

export default HomeScreen;