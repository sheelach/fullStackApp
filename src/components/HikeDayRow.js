import TiWeatherShower from 'react-icons/lib/ti/weather-shower';
import TiWeatherSunny from 'react-icons/lib/ti/weather-sunny';
import TiCalenderOutline from 'react-icons/lib/ti/calender-outline';
import React from 'react';
import { PropTypes } from 'react';

export const HikeDayRow = ({trail,date,
								rainy,sunny}) => (
	<tr>
		<td>{date}</td>
		<td>
		{trail}
		</td>
		<td>
		{(rainy)? < TiWeatherShower /> :null}
		</td>
		<td>
		{(sunny)? <TiWeatherSunny /> :null}
		</td>
	</tr>								
								)

HikeDayRow.propTypes = {
		trail: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		rainy: PropTypes.bool,
		sunny: PropTypes.bool

}