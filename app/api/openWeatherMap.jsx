let axios = require('axios')
const OPEN_WEATHER_MAP_URL ='http://api.apixu.com/v1/current.json?key=b388aa2ee9364bbaa0c62923162111';

function getTemp(location) {
	var encodedLocation = encodeURIComponent(location)
	var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

	return axios.get(requestUrl)
	.then((res) => {
		debugger;
		if(res.data.error !== undefined){
			throw new Error(res.data.error.message)
		}else{
			return res.data.current.temp_c;
		}
	},(res) => {
			throw new Error(res.data.error.message)	
		})
}	

export {getTemp};