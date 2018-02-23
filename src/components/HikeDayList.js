import TiWeatherShower from 'react-icons/lib/ti/weather-shower';
import TiWeatherSunny from 'react-icons/lib/ti/weather-sunny';
import TiCalenderOutline from 'react-icons/lib/ti/calender-outline';
import { HikeDayRow } from './HikeDayRow';
import React from 'react';
import { PropTypes } from 'react';
import { Link } from 'react-router';


export const HikeDayList = ({days,filter}) => {
    const filteredDays = (!filter || !filter.match(/rainy|sunny/))?days : days.filter(day => day[filter])
    return (
        <div className="hike-day-list">
	<table>
        <thead>
             <tr>
             <th>Date</th>
             <th>Trail</th>
             <th>Rainy</th>
             <th>Sunny</th>
             </tr>
             <tr>
                <td colSpan = {4}>
                <Link to ="/list-days">
                    Hike days</Link>
                <Link to ="/list-days/rainy">
                Rainy Days</Link>
                 <Link to ="/list-days/sunny">
                Sunny Days</Link>
                </td>

             </tr>
        </thead>
        <tbody>
        	  { filteredDays.map((day, i) =>
        	  	<HikeDayRow key ={i}
        	  				{...day} />
        			)}	
        </tbody>
	</table>
    </div>
    )

}

HikeDayList.PropTypes = {
    days: function(props){
        if(!Array.isArray(props.days)){
            return new Error(
            "HikeDayList should be an array"
            )
        }else if(!props.days.length){
            return new Error(
            "HikeDay must have records to display")
        }else{
            return null;
        }
    }
}
