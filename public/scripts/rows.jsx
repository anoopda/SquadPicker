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

	flag : true
}
}





generateLayout(){
const first = this.props.row;
var layout = first.map((item,i)=>{
	return <Players players ={item} key={i}/>
		  
});
return layout;
}



render(){

return(

	<div className = "rows" id ={this.props.id}  onDrop={this.drop} onDragOver={this.allowDrop} ref={node => this.node = node} >
		{this.generateLayout()}
	</div>
);
}


allowDrop(ev) {
    ev.preventDefault();
    var id = ev.target.id;
    var no = ev.target.children.length;
   

    if(id=='Goali_row' && no=='1')
    {
    	this.setState({flag : false});
    }
    else
    {
    	this.setState({flag : true});
    }

   
}


drop(ev) {
	
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    if(this.state.flag==true){
    	    ev.target.appendChild(document.getElementById(data));	
    }

   

}


}