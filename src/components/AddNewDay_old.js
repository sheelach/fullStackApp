import { PropTypes, Component } from 'react';

export class AddNewDay extends Component
	{
		constructor(props){
			super(props)
			this.submit = this.submit.bind(this);
		}
		submit(e)
		{
			e.preventDefault();
			console.log('trail',this.refs.trail.value);
			console.log('date',this.refs.date.value);
			console.log('rainy',this.refs.rainy.checked);
			console.log('sunny',this.refs.sunny.checked);

		}
      render()
      {
      	const {trail,date,rainy,sunny } = this.props;

      	return(
				<form onSubmit = {this.submit} className="add-day-form">
					 <label htmlFor="trail"> Trail Name </label>			
					 <input id= "trail" type ="text" required  defaultValue = 
					 {trail} ref ="trail"/>

					 <label htmlFor="Date"> Date </label>	
					 <input id= "date" type ="date" required  defaultValue ={date} ref ="date"/>

					 <div>
					 <label htmlFor="rainy"> Rainy Day</label>
					 <input id= "rainy" type ="checkbox"  defaultChecked ={rainy} ref ="rainy"/>
					 </div>

					 <div>
					 <label htmlFor="sunny"> Sunny Day</label>
					 <input id= "sunny" type ="checkbox"   defaultChecked ={sunny} ref="sunny"/>
					 </div>

					 <button>
					 Add a New Entry
					 </button>
      			</form>
      			);
      }
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