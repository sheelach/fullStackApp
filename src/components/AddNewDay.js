import { PropTypes,Component } from 'react';

const eastbayTrails = [
		"Iron Horse Trail",
		"Sugar Loaf Trail",
		"Alma Trail",
		"RedWoods",
		"Mt.Diablo Hills"]

class Autocomplete extends Component
{
	get value(){
		return this.refs.inputTrail.value;
	}

	set value(inputValue){
		this.refs.inputTrail.value = inputValue;
	}
	render()
	{
		return(
			<div>
			<input  ref ="inputTrail" type = "text" list ="list-trails" />
			<datalist id = "list-trails">
				{this.props.options.map((opt,i) => <option key ={i} >{opt}</option>)}
			</datalist>

			</div>
			);
	}
}

export const AddNewDay = ({trail,date,rainy,sunny,onNewEntry }) =>{

	let _trail,_date,_sunny,_rainy;

	const submit =(e) =>
		{
			e.preventDefault();

			onNewEntry({
				trail:_trail.value,
				date:_date.value,
				rainy:_rainy.checked,
				sunny:_sunny.checked
			});
			_trail.value = '';
			_date.value ='';
			_rainy.checked = false;
			_sunny.checked = false;
		}
	return(
				<form onSubmit = {submit} className="add-day-form">
					 <label htmlFor="trail"> Trail Name </label>			
					 <Autocomplete options ={eastbayTrails} ref ={input => _trail = input}/>

					 <label htmlFor="Date"> Date </label>	
					 <input id= "date" type ="date" required  defaultValue ={date} ref ={input => _date = input}/>

					 <div>
					 <label htmlFor="rainy"> Rainy Day</label>
					 <input id= "rainy" type ="checkbox"  defaultChecked ={rainy} ref ={input => _rainy = input}/>
					 </div>

					 <div>
					 <label htmlFor="sunny"> Sunny Day</label>
					 <input id= "sunny" type ="checkbox"   defaultChecked ={sunny} ref={input => _sunny = input}/>
					 </div>

					 <button>
					 Add a New Entry
					 </button>
      			</form>
      			);
} 


AddNewDay.defaultProps = {
	trail:"Iron Horse Trail",
	date:"2018-01-01",
	rainy:false,
	sunny:true
}



AddNewDay.PropTypes = {
	trail:PropTypes.string.isRequired,
	date:PropTypes.string.isRequired,
	rainy:PropTypes.bool.isRequired,
	sunny:PropTypes.bool.isRequired
}