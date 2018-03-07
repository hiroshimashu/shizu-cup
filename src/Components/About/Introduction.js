import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';
import Explanation from './Explanation';
import ExplanationMain from './Explanation-main';

class Introduction extends Component {
    render(){
        return (
            <div className = 'introduction' style = {{
                maxWidth: '820px',
                margin: '0 auto',
                borderBottom: '1px solid #dcdddd',
                padding:'5rem 0'
            }}>
                <SectionTitle
                    mainTitle = 'ABOUT'
                    subTitle = 'テレしずCUPとは'
                />
                <Explanation />
                <ExplanationMain />
            </div>
        );
    }
}

export default Introduction;