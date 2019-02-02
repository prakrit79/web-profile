import React, { Component } from 'react';
import {Grid,Cell} from "react-mdl";

class AboutMe extends Component{
	render(){
		return(
			<div style = {{width: "100%", margin: "auto"}}>
				<Grid className = "landing-grid">
					<Cell col = {12}>
						<img className = "avatar-img" src= "https://dl.dropbox.com/s/ckpnpcu76cpf5pn/Cropped.png?dl=0" />
						<div className = "banner-text">
							<h1> About Me </h1>
							<hr/>
							<p> 
								My name is Prakrit Baidya and I am a recent graduate from the UBC Computer Science program. 
								I have had previous Co-op experience working at a Device and Data Security company called Absolute Software Corporation as a QA automation Engineer. 
								where I learned technical skills such as Agile software development process, Automation testing process, Github, Java, RESTFUL services, Groovy scripting, Jenkins and JIRA in a real industry setting.
							 	I have a strong background in software programming as I have learned and used various languages such as HTML, CSS, JavaScript, Java, JavaScript, Python and React during hackathon and personal projects. I have applied my skills by participating in multiple NW hackathons where I have worked on an Android application project using Java as well as a web application project.  
							  	I have gained a strong knowledge of data structure and algorithms, Java, C, Node JS, TypeScript, relational Databases during my various CS courses. Besides software programming two of my passions are sports and volunteer work.
							  </p>
						</div>
						

					</Cell>
				</Grid>
			</div>
			);
	}
}

export default AboutMe;