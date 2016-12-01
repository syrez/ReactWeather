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
			<div className="">
				<form>
					<div className="mx-auto col-xs-12 col-sm-5">
						<input className="form-control" ref="location" />
					</div>
					<div className="row flex-items-xs-center">
						<button className="btn btn-warning" onClick={this.onFormSubmit} >Get weather</button>
					</div>
				</form>
			</div>
		)
	}
}

export default WeatherForm