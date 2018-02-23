import { Component } from 'react';
import { HikeDayList } from './HikeDayList';
import { HikeDayCount } from './HikeDayCount';
import { AddNewDay } from './AddNewDay';
import { Menu } from './Menu';

export class App extends Component {
	constructor(props){
		super(props);

		this.state ={
			allHikeDays: [
			{
				trail: "Iron Horse Trail",
				date: "1/2/2018",
				rainy: true,
				sunny: false
			}
			
		]

		}
		this.addDay = this.addDay.bind(this);
		

	}
	addDay(newDay)
	{
		 	this.setState({
		 		allHikeDays: [
		 		    ...this.state.allHikeDays,
		 		        newDay
		 		        ]
		 	})
	}
	
	countDays(filter){
	return this.state.allHikeDays.filter(function(day){
				if(filter){
				return day[filter]
				}else
				{ return day}
	}).length

	}
	render() {
		return (
			<div className="app">
			<Menu />
						{(this.props.location.pathname === "/") ?
			  <HikeDayCount total={this.countDays()}
							 rainy={this.countDays(
							 		"rainy"
							 	)}
							 sunny={this.countDays(
							 		"sunny"
							 	)}/> :
			 (this.props.location.pathname === "/add-day") ?
			 	<AddNewDay  onNewEntry ={this.addDay}/> :
			 	<HikeDayList days={this.state.allHikeDays} filter = {this.props.params.filter}/>				 
			}		
			</div>
		)
	}
}
