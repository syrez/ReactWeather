import React from 'react'

class WeatherMessage extends React.Component{

	render(){
		return(
			<p>It is {this.props.temp}° in {this.props.location}</p>
		)
	}
}

export default WeatherMessage