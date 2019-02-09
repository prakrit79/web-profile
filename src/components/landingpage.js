import React, { Component } from 'react';
import {Grid,Cell} from "react-mdl";

class LandingPage extends Component{
	render(){
		return(
			<div style = {{width: "100%", margin: "auto"}}>
				<Grid className = "landing-grid">
					<Cell col = {12}>
						<img className = "avatar-img" alt= "avatar" src= "https://dl.dropbox.com/s/ckpnpcu76cpf5pn/Cropped.png?dl=0" />
						<div className = "banner-text">
							<h1> Web Developer and QA Automation Engineer </h1>
							<hr/>
							<p> Passionate about leveraging technology and creativity to create innovative solutions</p>
							<div className = "social-links">
								<a href = "https://www.linkedin.com/in/prakrit-baidya-69916a120/" rel = "noopener noreferrer" target = "_blank">
									<i class = "fab fa-linkedin" aria-hidden = "true"/>
								</a>

								<a href = "https://github.com/prakrit79" rel = "noopener noreferrer" target = "_blank">
									<i class = "fab fa-github-square" aria-hidden = "true"/>
								</a>

								<a class="mailto" href="mailto:baidya.prakrit@gmail.com">
									<i class="fas fa-envelope"></i>
								</a>
							</div> 
						</div>
					</Cell>
				</Grid>
			</div>
			);
	}
}

export default LandingPage;