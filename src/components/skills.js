import React, { Component } from 'react';
import {Grid,Cell,Card,CardTitle,CardText,CardActions,Button} from "react-mdl";

class Skills extends Component{

	render(){
		return(
			<div style = {{width: "100%", margin: "auto"}}>
				<Grid className = "project-grid">
					<div className = "project-links">
						<Cell col = {4}>
							<Card shadow={0} style={{width: '200px', height: '100%', margin: 'auto'}}>
    							<CardTitle expand style={{background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png) center 20% no-repeat'}}>
    								React
    							</CardTitle>
    							<CardActions border>
    								<p> Projects </p>
        							<Button onClick={() => window.open('https://github.com/prakrit79/web-profile')}colored>Web Profile Github</Button>
    							</CardActions>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '200px', height: '100%', margin: 'auto'}}>
    							<CardTitle expand style={{background: 'url(https://cdn2.iconfinder.com/data/icons/nodejs-1/128/nodejs-128.png) center 20%  no-repeat'}}>
    								JavaScript
    							</CardTitle>
    							<CardActions border>
    								<p> Projects </p>
        							<Button onClick={() => window.open('https://github.com/prakrit79/ConcertsMap')} colored>ConcertsMap Github</Button>
    							</CardActions>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '200px', height: '100%', margin: 'auto'}}>
    							<CardTitle expand style={{background: 'url(https://liuji-jim.gallerycdn.vsassets.io/extensions/liuji-jim/vue/0.1.5/1478501659069/Microsoft.VisualStudio.Services.Icons.Default) center 20% no-repeat'}}>
    								 Vue JS
    							</CardTitle>
    							<CardActions border>
    								<p> Projects </p>
        							<Button onClick={() => window.open('https://github.com/prakrit79/cpsc304-project-starter')}colored>Clinic Database Github</Button>
    							</CardActions>
							</Card>
						</Cell>
					</div>
				</Grid>
			</div>
			
			);
	}
}

export default Skills;