import React from 'react';
import '../stylesheets/ui.scss';
import TiWeatherShower from 'react-icons/lib/ti/weather-shower';
import TiWeatherSunny from 'react-icons/lib/ti/weather-sunny';
import TiCalenderOutline from 'react-icons/lib/ti/calender-outline';
import { PropTypes } from 'react';

const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export const HikeDayCount = ({total =70, rainy =10, sunny=25, goal=100}) => (
		<div className="hike-day-count">
			<div className="total-days">
				<span>{total}</span>
			    <TiCalenderOutline /> 
				<span>days</span>
			</div>
			<div className="rainy-days">
				<span>{rainy}</span>
				<TiWeatherShower />
				
				<span>days</span>
			</div>
			<div className="sunny-days">
				<span>{sunny}</span>
				<TiWeatherSunny />
				<span>days</span>
			</div>
			<div>
				<span>
					{calcProgress(
						total, 
						goal
					)}
				</span>
			</div>
		</div>
)

HikeDayCount.defaultProps = {
		total:60,
		rainy: 15,
		sunny: 25,
		goal:75
}
 HikeDayCount.propTypes = {
		total: PropTypes.number,
		rainy: PropTypes.number,
		sunny: PropTypes.number,
		goal: PropTypes.number
}