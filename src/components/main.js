import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LandingPage from './landingpage';
import Resume from './resume';
import AboutMe from './aboutMe';
import Highlights from './highlights';
import Projects from './projects';
import ResumePDF from './resumePDF';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Contact from './contact';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path = "/experience" component={Experience} />
    <Route path = "/education" component={Education} />
    <Route path ="/resumePDF" component={ResumePDF} />
    <Route path="/resume" component={Resume} />
    <Route path="/aboutMe" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/highlights" component={Highlights} />
    <Route path="/skills" component={Skills} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;