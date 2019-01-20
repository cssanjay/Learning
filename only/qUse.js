// var Q = require('q');

// Q(undefined)
// .then(function(){
// 	console.log('sanjay');
// })
// .then( function(){
// 	console.log('second then');
// })
// .then( function(){

// 	console.log('third then');
// })
// .then( function(){
// 	console.log('fourth then');
// })

var
    //3rd party NPM
    Q = require('q'),
    a,
    data = 'sanjay';

var deferred = Q.defer();

Q(undefined)
.then(function(){
	console.log("first then");
})
.then(function(){
	deferred = Q.defer();
	try{
		a= JSON.parse(data);
	}
	catch(err){
		deferred.reject;
	}
		
})
.catch(function(ex){

	console.log('inside catch')
	// throw ex;
})
.then(function(){
	console.log('third then');
})
.catch(function(ex){
	console.log('fourth',ex);
});

console.log('sanjay');