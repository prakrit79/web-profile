import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import {Tabs,Tab} from 'react-mdl'
import Projects from './projects';
import Education from './education';
import Experience from './experience';
import Highlights from './highlights';
import Skills from './skills';

class Resume2 extends Component {

   constructor(props) {
        super(props)
        this.state = { 
          activeTab: 0 
        };
    }

  toggleCategories(tabId){
    switch(this.state.activeTab){
      case 0:
        return(
          <Highlights/>
        );
        break;

      case 1:
        return(
          <Education/>
        );
        break;

      case 2:
        return(
          <Experience/>
        );
        break;  

      case 3:
        return(
          <Skills/>
        );
        break;  

      case 4:
        return(
          <Projects/>
        );
        break;  

      default:
        return(
         <Highlights/>
        );
        break;

    }
  }  


  render() {
    return (
       <div className="resume-tabs">
          <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab:tabId})} ripple>
            <Tab> Highlights </Tab>
            <Tab> Education </Tab>
            <Tab> Experience </Tab>
            <Tab> Skills </Tab>
            <Tab> Projects </Tab>
          </Tabs>
          <section className = "resume-grid">
            {this.toggleCategories()}
          </section>
               
        </div> 
    );
  }
}

export default Resume2;