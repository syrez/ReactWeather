import React from 'react'

class WeatherMessage extends React.Component{

	render(){
		return(
			<div className="wth-msg">
				<h2 className="wth-msg-txt">It is {this.props.temp}° in {this.props.location}</h2>	
			</div>
		)
	}
}

export default WeatherMessage