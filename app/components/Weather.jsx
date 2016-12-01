import React from 'react'
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'
import {getTemp} from '../api/openWeatherMap'

class Weather extends React.Component{

	state = {
		isLoading:false
	}

	handleSearch = (location) => {
		this.setState({isLoading: true})

		getTemp(location).then((temp) => {
			this.setState({
				isLoading:false, 
				location:location, 
				temp:temp 
			});
		},(err) => {
			this.setState({isLoading:false});
			alert(err)
		});
	}

	render(){
		let {isLoading, temp, location} = this.state;

		function renderMessage(){
			if(isLoading){
				return <h3>Fetching weather...</h3>
			}else if(temp && location){
				return <WeatherMessage location={location} temp={temp}/>;
			}
		}
		return(
			<div className="container weather">
				<h2 className="text-xs-center">Get Weather</h2>
				<WeatherForm onSearch={this.handleSearch} />
				<div className="row flex-items-xs-center">
					{renderMessage()}
				</div>
			</div>
		)
	}
}

export default Weather