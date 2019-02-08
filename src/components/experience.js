import React, { Component } from 'react';
import {Grid,Cell,Card,CardTitle,CardText,CardActions,CardMenu,IconButton,Button} from "react-mdl";

class Experience extends Component{

	render(){
		return(
			<div style = {{width: "100%", margin: "auto"}}>
				<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    				<CardTitle style={{color: 'black', height: '176px', background: 'url(http://www.annualreports.com/HostedData/CompanyHeader/TSX_ABT.png) center / contain no-repeat'}}>Absolute Software</CardTitle>
    				<CardTitle>
    					 QA Automation Coop at Absolute Software
   					</CardTitle>
   					<CardText>
   						<p>January 2017 - September 2017 </p>
   						<p>Accomplishments: </p>
							Ensured high standard of the Absolute Web application by designing, scripting, maintaining and executing automation tests for UI, Middle Tier, regression and end-to-end tests.
							Significantly reduced the testing time and improved the accuracy of the test results of two of the most important features of Absolute software (Device Analytics and Software Catalogue) 
							by converting a large number of Middle tier manual tests to automated tests. Designed, executed and maintained the automation test project for one of the new flagship feature of Absolute software from scratch
						<p></p>
						<p>Skills gained: </p>
							Agile Methodology | Automation Test Framework | Groovy | Java | JIRA | Selenium | Soap UI | Quality Assurance
   					</CardText>
    				<CardActions border>
        				<Button onClick={() => window.open('https://www.absolute.com/en')} colored>About Absolute Software</Button>
    				</CardActions>
				</Card>
			</div>
			
			);
	}
}

export default Experience;