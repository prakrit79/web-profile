import React, { Component } from 'react';
import Education from './education';
import Experience from './experience';

class Highlights extends Component{
	render(){
		return(
				
					<div className = "project-links">
						<Education/>
						<Experience/>
					</div>
			
			
			);
	}
}

export default Highlights;