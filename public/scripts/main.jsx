import React from 'react';
import ReactDOM from 'react-dom';
import Row from './rows.jsx';	


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
								nationality:"India"
							},
							{
								name:"Nishin",
								no:"02",
								age:"26",
								height:"6'5",
								weight:"225lbs",
								nationality:"Sweden"
							}



					],


					"second_row":[
								{
									name:"Ann",
									no:"03",
									age:"26",
									height:"6'8",
									weight:"202lbs",
									nationality:"Brazil"

								},

								{
									name:"Anoop",
									no:"07",
									age:"22",
									height:"6'2",
									weight:"200lbs",
									nationality:"Spain"
								},

								{
								name:"Sabir",
								no:"05",
								age:"22",
								height:"6'6",
								weight:"200lbs",
								nationality:"Hungary"
								

								},


								{
									name:"Gayathri",
									no:"22",
									age:"25",
									height:"5'8",
									weight:"200lbs",
									nationality:"China"	

								}


					],

					"Third_row":[
							{
								name:"Sreenath",
								no:"06",
								age:"21",
								height:"6'1",
								weight:"235lbs",
								nationality:"India"	

							},
							{
								name:"Finnidy",
								no:"10",
								age:"19",
								height:"6'7",
								weight:"168lbs",
								nationality:"Hungary"	

							},
							{
								name:"Dan",
								no:"08",
								age:"22",
								height:"6'2",
								weight:"200lbs",
								nationality:"England"	

							},
							{
								name:"Seena",
								no:"100",
								age:"16",
								height:"6'2",
								weight:"200lbs",
								nationality:"Rome"

							}

					],

					"Goali_row":[

							{

								name:"Ajay",
								no:"41",
								age:"22",
								height:"6'2",
								weight:"200lbs",
								nationality:"Denmark"

							}



					]
	}

}




render()
{
			
		 return (

		 	<div className = "rowContainer">
		 		<Row id = {"first_row"} row ={this.state.first_row}/>
		 		<Row id= {"second_row"} row = {this.state.second_row}/>
		 		<Row id= {"Third_row"} row ={this.state.Third_row}/>
		 		<Row id= {"Goali_row"} row={this.state.Goali_row}/>
		 	</div>	 

		 	);


}


}



ReactDOM.render(<Main/>, document.getElementById('app'));
