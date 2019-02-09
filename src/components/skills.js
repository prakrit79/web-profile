import React, { Component } from 'react';
import {Grid,Cell,Card,CardTitle,CardText,CardActions,Button} from "react-mdl";

class Skills extends Component{

	render(){
		return(
			<div style = {{width: "100%", margin: "auto"}}>
				<h5 style = {{textAlign: 'center'}}>Coding Languages</h5>
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
    							<CardTitle expand style={{background: 'url(https://cdn0.iconfinder.com/data/icons/flat-round-system/512/java-128.png) center 20% no-repeat'}}>
    								Java
    							</CardTitle>
    							<CardActions border>
    								<p> Projects </p>
        							<Button onClick={() => window.open('https://github.com/prakrit79/web-profile')}colored>Web Profile Github</Button>
    							</CardActions>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '200px', height: '100%', margin: 'auto'}}>
    							<CardTitle expand style={{background: 'url(https://cdn2.iconfinder.com/data/icons/oxygen/128x128/mimetypes/application-x-python.png) center 20% no-repeat'}}>
    								Python
    							</CardTitle>
    							<CardActions border>
    								<p> Projects </p>
        							<Button onClick={() => window.open('https://github.com/prakrit79/computerVisionProjects')}colored>Computer Vision</Button>
    							</CardActions>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '200px', height: '100%', margin: 'auto'}}>
    							<CardTitle expand style={{background: 'url(https://cdn0.iconfinder.com/data/icons/superuser-extension-dark/512/675172-data_database_sql_query-128.png) center 20% no-repeat'}}>
    								SQL
    							</CardTitle>
    							<CardActions border>
    								<p> Projects </p>
        							<Button onClick={() => window.open('https://github.com/prakrit79/cpsc304-project-starter')}colored>Clinic Database Github</Button>
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
				<h5 style = {{textAlign: 'center'}}>Tools</h5>
				<Grid className = "project-grid">
					<div className = "project-links">
						<Cell col = {4}>
							<Card shadow={0} style={{width: '200px', height: '100%', margin: 'auto'}}>
    							<CardTitle expand style={{background: 'url(https://cdn.iconscout.com/icon/premium/png-128-thumb/selenium-3-600715.png) center 20% no-repeat'}}>
    								Selenium
    							</CardTitle>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '200px', height: '100%', margin: 'auto'}}>
    							<CardTitle expand style={{background: 'url(https://chocolatey.org/content/packageimages/soapui.5.4.0.png) center 20% no-repeat'}}>
    								SoapUI
    							</CardTitle>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '200px', height: '100%', margin: 'auto'}}>
    							<CardTitle expand style={{background: 'url(https://cdn.apps.splunk.com/media/public/icons/faa5153e-60ab-11e5-8293-0ab940ef8179.png) center 20% no-repeat'}}>
    								JIRA
    							</CardTitle>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '200px', height: '100%', margin: 'auto'}}>
    							<CardTitle expand style={{background: 'url(https://www.file-extensions.org/imgs/app-icon/128/8854/mongodb-icon.png) center 20% no-repeat'}}>
    								MongoDB
    							</CardTitle>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '200px', height: '100%', margin: 'auto'}}>
    							<CardTitle expand style={{background: 'url(https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-128.png) center 20%  no-repeat'}}>
    								Git
    							</CardTitle>
							</Card>
						</Cell>
					</div>
				</Grid>
				<h5 style = {{textAlign: 'center'}}>Processes</h5>
				<Grid className = "project-grid">
					<div className = "project-links">
						<Cell col = {4}>
							<Card shadow={0} style={{width: '200px', height: '100%', margin: 'auto'}}>
    							<CardTitle expand style={{background: 'url(https://cdn3.iconfinder.com/data/icons/leto-blue-human-resources/64/_agile_manager_scrum-128.png) center 20% no-repeat'}}>
    								Agile Methodology
    							</CardTitle>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '200px', height: '100%', margin: 'auto'}}>
    							<CardTitle expand style={{background: 'url(https://cdn3.iconfinder.com/data/icons/leto-blue-human-resources/64/_agile_manager_scrum-128.png) center 20% no-repeat'}}>
    								Scrum FrameWork
    							</CardTitle>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '200px', height: '100%', margin: 'auto'}}>
    							<CardTitle expand style={{background: 'url(https://cdn1.iconfinder.com/data/icons/testing-8/128/Set16-19-128.png) center 20% no-repeat'}}>
    								Test Automation
    							</CardTitle>
							</Card>
						</Cell>
						<Cell col = {4}>
							<Card shadow={0} style={{width: '200px', height: '100%', margin: 'auto'}}>
    							<CardTitle expand style={{background: 'url(https://cdn2.iconfinder.com/data/icons/seo-internet-marketing-4/256/Page_Quality-128.png) center 20% no-repeat'}}>
    								QA Processes
    							</CardTitle>
							</Card>
						</Cell>
					</div>
				</Grid>
			</div>
			
			);
	}
}

export default Skills;