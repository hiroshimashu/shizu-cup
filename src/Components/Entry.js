import React, { Component } from 'react';
import SectionTitle from './SectionTitle';

class Entry extends Component {
    render(){
        return (
            <div className = 'introduction' style = {{
                height: '50vh',
                maxWidth: '820px',
                margin: '0 auto',
                borderBottom: '1px solid #dcdddd',
                padding:'5rem 0'
            }}>
                <SectionTitle
                    mainTitle = 'ENTRY'
                    subTitle = 'エントリー'
                />
            </div>
        );
    }
}

export default Entry;