import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import SideBar from './Components/SideBar';
import KeyVisual from './Components/Top/KeyVisual';
import Sponsors from './Components/Sponsors';
import HomeScreen from './Screen/HomeScreen';
import EntryScreen from './Screen/EntryScreen';
import RulesScreen from './Screen/RulesScreen';
import PhotoAlbumScreen from './Screen/PhotoAlbumScreen';
import QuestionsScreen from './Screen/QuestionsScreen';


class App extends Component {
  constructor(props) {
      super(props);

      this.state = { width: window.innerWidth}

      this.handleResize = this.handleResize.bind(this);

  }


  componentDidMount() {
      window.addEventListener('resize', this.handleResize);
  }

  handleResize(e) {
      this.setState(() => {
          return {width: window.innerWidth}
      });
  }

  render() {
    return (
      <Router>
          <div className="App">
              <SideBar />
              <Route exact path = "/" component = { HomeScreen } />
              <Route path = '/entry' component = { EntryScreen } />
              <Route path = "/rules" component = { RulesScreen } />
              <Route path = "/photos" component = { PhotoAlbumScreen } />
              <Route path = "/questions" component = { QuestionsScreen } />
      </div>
      </Router>
    );
  }
}

export default App;
