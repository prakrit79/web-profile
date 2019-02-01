import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Header,Drawer,Content } from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
        <Layout style={{background: 'url(https://dl.dropbox.com/s/89ufwo88kov1xrp/SAM_1853.jpg) center / cover'}}>
          <Header transparent title="Prakrit's Portfolio" style={{color: 'Black'}}>
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
          </Header>
          <Drawer title="Menu">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content />
        </Layout>
      </div>
    );
  }
}

export default App;
