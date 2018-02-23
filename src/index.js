import React from 'react';
import { render } from 'react-dom';
import { HikeDayList} from './components/HikeDayList';
import { HikeDayCount } from './components/HikeDayCount';
import { App } from './components/App';
import './stylesheets/ui.scss';
import './stylesheets/index.scss';
import { Router, Route, hashHistory } from 'react-router';
import { Error } from './components/Error';
import { AddNewDay } from './components/AddNewDay';
import {Menu} from './components/Menu';



window.React = React

// create a list 
/*render(
	<HikeDayCount total={30}
					rainy={10}
					sunny={25}
					goal={100}	/>,
	document.getElementById('react-container')

)*/

render(
	<Router history = {hashHistory}>
		<Route path ="/"  component = {App}/>
		<Route path ="list-days"  component = {App}>
			<Route path =":filter"  component = {App}/>
		</Route> 
		<Route path ="add-day"  component = {App}/>
		<Route path ="*" component = {Error}/>
	</Router>

	,document.getElementById('react-container')
	
	)