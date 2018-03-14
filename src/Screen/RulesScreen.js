import React, { Component } from 'react';
import KeyVisual from '../Components/Rule/KeyVisual_Rule';
import RuleMain from '../Components/Rule/RuleMain';

class RulesScreen extends Component {
    render() {
        return (
            <div className = 'rules-screen'>
                <KeyVisual />
                <RuleMain />
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

export default RulesScreen;