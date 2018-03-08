import React, { Component } from 'react';
import KeyVisual from '../Components/Question/KeyVisual_Question';
import QuestionDetail from '../Components/Question/QuestionDetail';

class QuestionsScreen extends Component {
    render() {
        return (
            <div className = 'questionScreen' style = {styles.content}>
                <KeyVisual />
                <QuestionDetail />
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



export default QuestionsScreen;