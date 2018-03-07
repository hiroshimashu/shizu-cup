import React, { Component } from 'react';
import Main from './Main';
import KeyVisual from '../Components/Top/KeyVisual';
import Sponsors from '../Components/Sponsors';

class HomeScreen extends Component {
    render() {
        return (
            <div className = "home">
                <KeyVisual />
                <Main />
                <Sponsors />
            </div>
        );
    }
}

export default HomeScreen;