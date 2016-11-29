import React from 'react';
import ReactDOM from 'react-dom';


export default class extends React.Component {


	render(){
		return(

				<div className = "formations">
		 			<div>{this.props.formationRow1}</div>
		 			<div>{this.props.formationRow2}</div>
		 			<div>{this.props.formationRow3}</div>
		 		</div>
			
		);
	}



}