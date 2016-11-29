import React from 'react';
import ReactDOM from 'react-dom';

export default class extends React.Component {
	constructor(props){
		super(props);
		this.drag = this.drag.bind(this);
	}
	render(){

		return(
			<div className = "playerWrapper" id ={this.props.players.no} draggable="true" onDragStart={this.drag}>
				<div className = "players">
					<span className ="playerName">{this.props.players.name}</span>
					<span className ="playerNo"><b>{this.props.players.no}</b></span>
					<div className = "playerDetails">
						<div>Age:{this.props.players.age}</div>
						<div>Height:{this.props.players.height}</div>
						<div>Weight:{this.props.players.weight}</div>
						<div>Nationality:{this.props.players.nationality}</div>
						<img src={this.props.players.image}/>

					</div>
				</div>
			</div>	
		);
	}

	drag(ev) {

	    ev.dataTransfer.setData("text", ev.target.id);
	 	this.props.getRow(ev.target.parentNode);    
	}
}

