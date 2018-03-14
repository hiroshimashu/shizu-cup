import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import SideBar from './Components/SideBar';
import SideBarSmall from './Components/SideBarSmall';
import Header from './Components/HeaderSmall';
import MenuButton from './Components/MenuButton';
import HomeScreen from './Screen/HomeScreen';
import EntryScreen from './Screen/EntryScreen';
import RulesScreen from './Screen/RulesScreen';
import PhotoAlbumScreen from './Screen/PhotoAlbumScreen';
import QuestionsScreen from './Screen/QuestionsScreen';
import ContactScreen from './Screen/Contact';


class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          width: window.innerWidth,
          open: null
      }

      this.handleResize = this.handleResize.bind(this);
      this.handleClick = this.handleClick.bind(this);

  }


  componentDidMount() {
      window.addEventListener('resize', this.handleResize);
  }

  handleResize(e) {
      this.setState(() => {
          return {width: window.innerWidth}
      });
  }


  handleClick = () => {
        if(this.state.open === null){
            this.setState(() => {
                return { open: "open" }
            })
        } else {
            this.setState(() => {
                return { open: null }
            })
        }
  }


    render() {
    return (
      <Router>
          <div className="App">
              <SideBar />
              { this.state.width < 800 && <SideBarSmall open = {this.state.open} handleClick = {this.handleClick} /> }
              { this.state.width < 800 && <Header />}
              <MenuButton open = {this.state.open} handleClick = {this.handleClick} />
              <Route exact path = "/" component = { HomeScreen } />
              <Route path = '/entry' component = { EntryScreen } />
              <Route path = "/rules" component = { RulesScreen } />
              <Route path = "/photos" component = { PhotoAlbumScreen } />
              <Route path = "/questions" component = { QuestionsScreen } />
              <Route path = "/contact" component = { ContactScreen } />
      </div>
      </Router>
    );
  }
}

export default App;
