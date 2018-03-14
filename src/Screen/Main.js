import React, { Component } from 'react';
import Introduction from '../Components/About/Introduction';
import News from '../Components/News/News';
import Rule from '../Components/Rule/Rule';
import Entry from '../Components/Entry';
import Question from '../Components/Question/Question';


export default class Main extends Component {
    render() {
        return (
            <div className = 'main' style = {{position: 'relative'}}>
                <Introduction />
                <News />
                <Rule />
                <Entry />
                <Question />
            </div>
        );
    }
}