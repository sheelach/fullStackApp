import { createClass } from 'react';
import { HikeDayList } from './HikeDayList';
import { HikeDayCount } from './HikeDayCount';

export const App = createClass({
	getInitialState() {
		return {
			allHikeDays: [
			{
				trail: "Iron Horse Trail",
				date: new Date("1/2/2016"),
				rainy: true,
				sunny: false
			},
			{
				trail: "Sugar Loaf Trail",
				date: new Date("3/28/2016"),
				rainy: false,
				sunny: false
			},
			{
				trail: "Mt.Diablo Trail",
				date: new Date("4/2/2016"),
				rainy: false,
				sunny: true
			}
		]
		}
	},
	countDays(filter){
	return this.state.allHikeDays.filter(function(day){
				if(filter){
				return day[filter]
				}else
				{ return day}
	}).length

	},
	render() {
		return (
			<div className="app">
			    <HikeDayList days = {this.state.allHikeDays} />
			    <HikeDayCount  total= { this.countDays()}
			    				rainy ={this.countDays("rainy")}
			    				sunny={this.countDays("sunny")}			


			    />
				
			</div>
		)
	}
})
