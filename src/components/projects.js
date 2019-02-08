import React, { Component } from 'react';
import {Grid,Cell,Card,CardTitle,CardText,CardActions,Button} from "react-mdl";

class Projects extends Component{

	render(){
		return(
			<div style = {{width: "100%", margin: "auto"}}>
				<Grid className = "project-grid">
					<div className = "project-links">
						<Cell col = {4}>
							<Card shadow={0} style={{width: '220px',height: '457px', margin: 'auto'}}>
    							<CardTitle style={{height: '176px', background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png) center / contain no-repeat'}}>
    							</CardTitle>
                                    Web Portfolio
   								 <CardText>
        							CSS | HTML | React
    							</CardText>
                                <CardText>
                                    I wanted to create a web profile that showcases my passion for web development and technology. I used the simiplicity of React components along with CSS to create a simple online porfolio.
                                </CardText>
    							<CardActions border>
        							<Button onClick={() => window.open('https://github.com/prakrit79/web-profile')}colored>Github</Button>
        							<Button onClick={() => window.open('https://web-portfolio-prakrit.herokuapp.com/')}colored>Live</Button>
    							</CardActions>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '220px', height: '457px', margin: 'auto'}}>
    							<CardTitle style={{height: '176px', background: 'url(https://cdn2.iconfinder.com/data/icons/nodejs-1/128/nodejs-128.png) center / contain no-repeat'}}>
    							</CardTitle>
                                    Concerts Map
   								 <CardText>
        							JavaScript | JSON | REST
    							</CardText>
                                 <CardText>
                                    There are many artists people want to see live. We wanted to create a service that made it easy to visualize where an artist frequently travels so you can be prepared for your next show.
                                </CardText>
    							<CardActions border>
        							<Button onClick={() => window.open('https://github.com/prakrit79/ConcertsMap')} colored>Github</Button>
    							</CardActions>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '220px',height: '457px', margin: 'auto'}}>
    							<CardTitle style={{height: '176px', background: 'url(https://liuji-jim.gallerycdn.vsassets.io/extensions/liuji-jim/vue/0.1.5/1478501659069/Microsoft.VisualStudio.Services.Icons.Default) center / contain no-repeat'}}>
    							</CardTitle>
                                    Clinic Database
   								 <CardText>
        							CSS | Vue JS | SQL
    							</CardText>
                                <CardText>
                                    Me and my team created a clinic database using SQL and Vue that would allow a medical clinic to operate efficiently through the help of direct appointment, referral as well as prescription system.
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