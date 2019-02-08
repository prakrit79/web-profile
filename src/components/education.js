import React, { Component } from 'react';
import {Grid,Cell,Card,CardTitle,CardText,CardActions,CardMenu,IconButton,Button} from "react-mdl";

class Projects extends Component{

	render(){
		return(
			<div style = {{width: "100%", margin: "auto"}}>
				<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    				<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://c1.staticflickr.com/9/8027/29016431894_2f218cea36_b.jpg) center / cover'}}></CardTitle>
    				<CardTitle> University of British Columbia </CardTitle>
    				<CardText>
    					 <p>September 2014 - January 2019 </p>	
    					 <p>Bachelor of Sceince in Computer Sceince </p>
        				 <p>Vancouver, Canada</p>
   					</CardText>
    				<CardActions border>
        				<Button onClick={() => window.open('https://www.ubc.ca/about/')} colored>About UBC</Button>
    				</CardActions>
				</Card>
			</div>
			
			);
	}
}

export default Projects;