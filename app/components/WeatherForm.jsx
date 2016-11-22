import React from 'react'

class WeatherForm extends React.Component{

	state = {
		city:''
	}

	onFormSubmit = (e) => {
		e.preventDefault()
		var location = this.refs.location.value
		if(location.length > 0){
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	}

	render(){
		return(
			<div>
				<form>
					<div>
						<input type="text" ref="location" />
					</div>
					<div>
						<button onClick={this.onFormSubmit} >Get weather</button>
					</div>
				</form>
			</div>
		)
	}
}

export default WeatherForm