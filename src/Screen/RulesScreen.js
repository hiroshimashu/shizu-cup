import React, { Component } from 'react';
import KeyVisual from '../Components/Rule/KeyVisual_Rule';
import RuleMain from '../Components/Rule/RuleMain';

class RulesScreen extends Component {
    render() {
        return (
            <div className = 'rulesScreen' style = { styles.content }>
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
        marginLeft: '182px',
        zIndex: 10
    }
}

export default RulesScreen;