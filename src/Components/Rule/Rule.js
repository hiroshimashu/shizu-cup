import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';
import RuleCard from './RuleCard';

class Rule extends Component {
    render(){
        return (
            <div className = 'rule-top' style = {{
                maxWidth: '820px',
                margin: '0 auto',
                borderBottom: '1px solid #dcdddd',
                padding:'5rem 0'
            }}>
                <SectionTitle
                    mainTitle = 'RULE'
                    subTitle = '大会ルール'
                />
                <RuleCard />
            </div>
        );
    }
}

export default Rule;