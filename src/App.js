import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Header,Drawer,Content } from 'react-mdl';
import {Link} from 'react-router-dom'
import Main from './components/main'

class App extends Component {
  render() {
    return (
      <div class = "container">
          <Layout>
            <Header className = "header-color" title="Prakrit Baidya" scroll>
              <Navigation>
                  <Link to="/">Profile</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutMe">About Me</Link>
                  <Link to="/projects">Projects</Link>
              </Navigation>
            </Header>
            <Drawer title="Menu">
              <Navigation>
                  <Link to="/">Profile</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutMe">About Me</Link>
                  <Link to="/projects">Projects</Link>
              </Navigation>
          </Drawer>
          <Content>
            <Main/>
          </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
