function addPromise(a,b){
	return new Promise(function(resolve,reject){
		if(typeof a == 'number' && typeof b == 'number'){
			resolve(a + b)
		}else{
			reject('number incorrect')
		}
	});
}

addPromise(5,10).then(function(result) {
	console.log('loading');
	setTimeout(function(arguments) {
		console.log('success',result);	
	},5000)
},function(err) {
	console.log('error',err);
})
 

