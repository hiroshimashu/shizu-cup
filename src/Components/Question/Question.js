import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';
import QuesitonMain from './QuestionMain';
import { Link } from 'react-router-dom';

class Question extends Component {
    render(){
        return (
            <div className = 'question-top' style = {{
                maxWidth: '820px',
                margin: '0 auto',
                borderBottom: '1px solid #dcdddd',
                padding:'5rem 0'
            }}>
                <SectionTitle
                    mainTitle = 'Q&A'
                    subTitle = 'よくある質問'
                />
                <QuesitonMain />
                <div style = {{width: '100%', textAlign: 'right', marginTop: '10px'}}>
                    <Link to = '/questions'　style = {{marginRight: 0}}>
                        ＞＞詳細はこちら
                    </Link>
                </div>
            </div>
        );
    }
}

export default Question;