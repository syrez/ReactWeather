var names = ['Kevin','Andrew','Ryan'];

// names.forEach((name) => {
// 	console.log('forEach', name);
// }) 

// names.forEach((name) => console.log('arrowfunc  ', name)) 

// var returnMe = (name) => name + '!';
// console.log(returnMe('kevin'));

// var person = {
// 	name:"kevin",
// 	greet: function(){
// 				names.forEach((name) => { 
// 				console.log(`${this.name} says hi to ${name}`)
// 			}) 
// 	}
// }

// person.greet();


function add(a,b){
	return a + b;
}


var addS = (a,b) => {
	return a + b;
}

var addE = (a,b) => a + b;


console.log(add(1,3));
console.log(addS(9,0));
console.log(addE(9,5));