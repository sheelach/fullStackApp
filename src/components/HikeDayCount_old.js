import React from 'react';
import { Component} from 'react';
import style from '../stylesheets/ui.scss';

 export class HikeDayCount extends Component{

	percentToDecimal(decimal){
		return ((decimal *100 ) + '%');
	}

	calcProgress(total,goal){
		return this.percentToDecimal(total / goal)
	}
		render(){
			return(
				<div className="hike-day-count">
					<div className="total-days">
					<span>{this.props.total}</span>
					<span>days</span>
					</div>

					<div className="rainy-days">
					<span>{this.props.rainy}</span>
					<span>days</span>
					</div>

					<div className="Sunny days">
					<span>{this.props.sunny}</span>
					<span>days</span>
					</div>

					<div>
					<span>
						{this.calcProgress(
							this.props.total, 
							this.props.goal
						)}
					</span>
					</div>
				</div>
				);
		}
}


//export default HikeDayCount();