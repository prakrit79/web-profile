import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LandingPage from './landingpage';
import Resume from './resume';
import AboutMe from './aboutMe';
import Interests from './interests';
import Projects from './projects';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/resume" component={Resume} />
    <Route path="/aboutMe" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/interests" component={Interests} />
  </Switch>
)

export default Main;