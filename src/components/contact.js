import React, { Component } from 'react';
import {Grid,Cell,Card,CardTitle,CardText,CardActions,Button,List,ListItem,ListItemAction,ListItemContent,Icon} from "react-mdl";

class Contact extends Component {
  render() {
    return(
    	<div style = {{width: "100%", margin: "auto"}}>
    			<h5 style = {{textAlign: 'center' ,fontfontFamily: 'Anton'}}>Contact Me</h5>
    			<Grid className = "project-grid">
    				<div className = "project-links">
    					<Cell col = {4}>
							<img className = "contact-img" alt= "avatar" src= "https://dl.dropbox.com/s/ckpnpcu76cpf5pn/Cropped.png?dl=0" />
						</Cell>
    				</div>
    			</Grid>
				<Grid className = "project-grid">
					<div className = "project-links">
						<Cell col = {4}>
							<Card shadow={0} style={{width: '220px', margin: 'auto'}}>
    							<CardTitle style={{height: '176px', background: 'url(https://cdn3.iconfinder.com/data/icons/leaf/256/linkedin.png) center / contain no-repeat'}}>
    							</CardTitle>
                                    Linkedin
   								 <CardText>
        							Prakrit Baidya 
    							</CardText>
                                <CardActions border>
        							<Button onClick={() => window.open('https://www.linkedin.com/in/prakrit-baidya-69916a120/')}colored>LinkedIn</Button>
    							</CardActions>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '220px', margin: 'auto'}}>
    							<CardTitle style={{height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61vtLDIYyMUV0929EhueGjm9Qg-WTjuLsf0Ioa8jva0-0YfIaeA) center / contain no-repeat'}}>
    							</CardTitle>
                                    Skype
   								 <CardText>
        							baidya.prakrit@gmail.com
    							</CardText>
    							<CardActions border>
        							<Button onClick={() => window.open('https://join.skype.com/invite/voeup4GB13Vg')}colored>Skype</Button>
    							</CardActions>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '220px', margin: 'auto'}}>
    							<CardTitle style={{height: '176px', background: 'url(https://cdn.iconscout.com/icon/free/png-256/apple-phone-2-493154.png) center / contain no-repeat'}}>
    							</CardTitle>
                                    Phone
   								 <CardText>
        							7783205662
    							</CardText>
							</Card>
						</Cell>		
						<Cell col = {4}>
							<Card shadow={0} style={{width: '220px', margin: 'auto'}}>
    							<CardTitle style={{height: '176px', background: 'url(https://pinkeyegraphics.co.uk/wp-content/uploads/gmail-icon.ico) center / contain no-repeat'}}>
    							</CardTitle>
                                    Email
   								 <CardText>
        							baidya.prakrit@gmail.com
    							</CardText>
    							<CardActions border>
        							<Button onClick={() => window.open('mailto:baidya.prakrit@gmail.com')}colored>Email</Button>
    							</CardActions>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '220px', margin: 'auto'}}>
    							<CardTitle style={{height: '176px', background: 'url(https://cdn3.iconfinder.com/data/icons/sociocons/256/github-sociocon.png) center / contain no-repeat'}}>
    							</CardTitle>
                                    Github
   								 <CardText>
        							github.com/prakrit79
    							</CardText>
    							<CardActions border>
        							<Button onClick={() => window.open('https://github.com/prakrit79/')} colored>Github</Button>
    							</CardActions>
							</Card>
						</Cell>
					</div>
				</Grid>
			</div>

    )
  }
}
export default Contact;