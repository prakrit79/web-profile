import React, { Component } from 'react';
import {Grid,Cell,Card,CardTitle,CardText,CardActions,Button} from "react-mdl";

class Projects extends Component{

	render(){
		return(
			<div style = {{width: "100%", margin: "auto"}}>
				<Grid className = "project-grid">
					<div className = "banner-text">
						<h1> My Projects </h1>
					</div>
					<div className = "project-links">
						<Cell col = {4}>
							<Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
    							<CardTitle expand style={{background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6vsgSGuMmZVWPPzjS_zh-nXcHBdSQ1zYcVVXv7USROt0-Zxw3) center 20% no-repeat'}}>
    								Web Portfolio
    							</CardTitle>
   								 <CardText>
        							CSS | HTML | React
    							</CardText>
    							<CardActions border>
        							<Button onClick={() => window.open('https://github.com/prakrit79/web-profile')}colored>Github</Button>
    							</CardActions>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
    							<CardTitle expand style={{background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6vsgSGuMmZVWPPzjS_zh-nXcHBdSQ1zYcVVXv7USROt0-Zxw3) center 20% no-repeat'}}>
    								Concerts Map
    							</CardTitle>
   								 <CardText>
        							JavaScript | JSON | REST
    							</CardText>
    							<CardActions border>
        							<Button onClick={() => window.open('https://github.com/prakrit79/ConcertsMap')} colored>Github</Button>
    							</CardActions>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
    							<CardTitle expand style={{background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6vsgSGuMmZVWPPzjS_zh-nXcHBdSQ1zYcVVXv7USROt0-Zxw3) center 20% no-repeat'}}>
    								 Clinic Database
    							</CardTitle>
   								 <CardText>
        							CSS | Vue JS | SQL
    							</CardText>
    							<CardActions border>
        							<Button onClick={() => window.open('https://github.com/prakrit79/cpsc304-project-starter')}colored>Github</Button>
    							</CardActions>
							</Card>
						</Cell>
					</div>
				</Grid>
			</div>
			
			);
	}
}

export default Projects;