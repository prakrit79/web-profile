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
            <Header title="Prakrit's Portfolio" scroll>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutMe">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/interests">Interests</Link>
              </Navigation>
            </Header>
            <Drawer title="Menu">
              <Navigation>
                   <Link to="/resume">Resume</Link>
                  <Link to="/aboutMe">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/interests">Interests</Link>
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
