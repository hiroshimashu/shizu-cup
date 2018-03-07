import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';
import NewsCard from './NewsCard';

class News extends Component {
    render(){
        return (
            <div className = 'news' style = {{
                maxWidth: '820px',
                margin: '0 auto',
                borderBottom: '1px solid #dcdddd',
                padding:'5rem 0'
            }}>
                <SectionTitle
                    mainTitle = 'NEWS'
                    subTitle = 'ニュース'
                />
                <NewsCard />
            </div>
        );
    }
}

export default News;