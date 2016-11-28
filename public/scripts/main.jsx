import React from 'react';
import ReactDOM from 'react-dom';
import Row from './rows.jsx';
import Formation from './formation.jsx';	


export default class Main extends React.Component {



constructor(){
super();

	this.state= {
					"first_row":[

							{
								name:"Vijay",
								no:"01",
								age:"18",
								height:"6'5",
								weight:"200lbs",
								nationality:"India",
								image:"../images/1480010172_flag-india.png"
							},
							{
								name:"Nishin",
								no:"02",
								age:"26",
								height:"6'5",
								weight:"225lbs",
								nationality:"Germany",
								image:"../images/1480010307_flag-germany.png"
							}



					],


					"second_row":[
								{
									name:"Ann",
									no:"03",
									age:"26",
									height:"6'8",
									weight:"202lbs",
									nationality:"Brazil",
									image:"../images/1480010794_flag-brazil.png"

								},

								{
									name:"Anoop",
									no:"07",
									age:"22",
									height:"6'2",
									weight:"200lbs",
									nationality:"Spain",
									image:"../images/1480010157_flag-spain.png"
								},

								{
								name:"Sabir",
								no:"05",
								age:"22",
								height:"6'6",
								weight:"200lbs",
								nationality:"Portugal",
								image:"../images/1480010184_flag-portugal.png"
								

								},


								{
									name:"Gayathri",
									no:"22",
									age:"25",
									height:"5'8",
									weight:"200lbs",
									nationality:"Argentina",
									image:"../images/1480010198_flag-argentina.png"	

								}


					],

					"Third_row":[
							{
								name:"Sreenath",
								no:"06",
								age:"21",
								height:"6'1",
								weight:"235lbs",
								nationality:"India",
								image:"../images/1480010172_flag-india.png"	

							},
							{
								name:"Finnidy",
								no:"10",
								age:"19",
								height:"6'7",
								weight:"168lbs",
								nationality:"France",
								image:"../images/1480010286_flag-france.png"	

							},
							{
								name:"Dan",
								no:"08",
								age:"22",
								height:"6'2",
								weight:"200lbs",
								nationality:"Brazil",
								image:"../images/1480010794_flag-brazil.png"	

							},
							{
								name:"Seena",
								no:"100",
								age:"16",
								height:"6'2",
								weight:"200lbs",
								nationality:"Spain",
								image:"../images/1480010157_flag-spain.png"

							}

					],

					"Goali_row":[

							{

								name:"Ajay",
								no:"41",
								age:"22",
								height:"6'2",
								weight:"200lbs",
								nationality:"Portugal",
								image:"../images/1480010184_flag-portugal.png"

							}



					],

					"sub_row":[

							{

								name:"Mr.X",
								no:"101",
								age:"22",
								height:"6'2",
								weight:"200lbs",
								nationality:"Spain",
								image:"../images/1480010157_flag-spain.png"	


							},
							{
								name:"Mr.XXX",
								no:"102",
								age:"22",
								height:"6'2",
								weight:"200lbs",
								nationality:"Argentina",
								image:"../images/1480010198_flag-argentina.png"	
	

							},
							{

								name:"CJ",
								no:"103",
								age:"25",
								height:"6'2",
								weight:"200lbs",
								nationality:"Germany",
								image:"../images/1480010307_flag-germany.png"	




							}



					],

		"formationRow1":2,
		"formationRow2":4,
		"formationRow3":4,
		"subRow":"null"
				
	}

}










render()
{
			
		 return (

		 	<div className = "rowContainer" ref={node => this.node = node}>
		 		<Row id = {"first_row"} row ={this.state.first_row} ref={node => this.row1 = node} getChild={this.getChild.bind(this)} subRow = {this.state.subRow} getsubRow={this.getsubRow.bind(this)}/>
		 		<Row id= {"second_row"} row = {this.state.second_row} ref={node => this.row2 = node} getChild={this.getChild.bind(this)} subRow = {this.state.subRow} getsubRow={this.getsubRow.bind(this)}/>
		 		<Row id= {"Third_row"} row ={this.state.Third_row} ref={node => this.row3 = node} getChild={this.getChild.bind(this)}  subRow = {this.state.subRow} getsubRow={this.getsubRow.bind(this)}/>
		 		<Row id= {"Goali_row"} row={this.state.Goali_row} getChild={this.getChild.bind(this)}   subRow = {this.state.subRow} getsubRow={this.getsubRow.bind(this)} />
		 		<Row id= {"sub_row"} row={this.state.sub_row} ref={node => this.subrow = node} getChild={this.getChild.bind(this)} subRow = {this.state.subRow} getsubRow={this.getsubRow.bind(this)} />
		 		<Formation formationRow1={this.state.formationRow1} formationRow2={this.state.formationRow2} formationRow3={this.state.formationRow3} />
		 	</div>	 

		 	);


}




getsubRow(subRow){

	this.setState({subRow:subRow});
	
}


getChild(){

this.setState({formationRow1:this.row1.node.children.length,formationRow2:this.row2.node.children.length,formationRow3:this.row3.node.children.length});
}



}



ReactDOM.render(<Main/>, document.getElementById('app'));
