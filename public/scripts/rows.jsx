import React from 'react';
import ReactDOM from 'react-dom';
import Players from './players.jsx';
import $ from 'jquery';


export default class extends React.Component {
	constructor(props){
		super(props);
		this.generateLayout = this.generateLayout.bind(this);
		this.drop = this.drop.bind(this);
		this.allowDrop = this.allowDrop.bind(this);
		this.state ={
			flag_goalie : true,
			flag_subRow : false,
			subRow:"null"
		}
		
	}

	generateLayout(){
		const first = this.props.row;
		var layout = first.map((item,i)=>{
			return <Players players ={item} key={i} getsubRow={this.props.getsubRow}/>		  
		});
		return layout;
	}

	render(){
		return(
			<div className = "rows" id ={this.props.id}  onDrop={this.drop}  onDragOver={this.allowDrop} ref={node => this.node = node} >
				{this.generateLayout()}
			</div>
		);
	

	}


	allowDrop(ev) {
	    ev.preventDefault();
	    var id = ev.target.id;
	    var no = ev.target.children.length;
	    
	    
	   	if(id=='Goali_row' && no == '1')
		{
			this.setState({flag_goalie : false});
		}
		else
		{
			this.setState({flag_goalie : true});
		}

		if(this.state.subRow=='sub_row')
		{
			this.setState({flag_subRow:true});
			

		}
		else
		{
			this.setState({flag_subRow:false});
			

		}

		
	}

	drop(ev) {
		

	    ev.preventDefault();
	    var data = ev.dataTransfer.getData("text");

	     if (this.state.flag_goalie==true && this.props.subRow.id === 'sub_row' ){
	    	
	    	this.props.subRow.appendChild(document.getElementById(ev.target.firstChild.id));
	    	ev.target.appendChild(document.getElementById(data));	  
	    }

	    else if(this.state.flag_goalie==true && this.props.subRow.id != 'sub_row' ){	
	    ev.target.appendChild(document.getElementById(data));
	    }
	    
	    this.props.getChild();
	    
	}
}