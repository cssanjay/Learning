var a = (function(){

	function one(){
		var firstVariable = 'FIRST';
	}

	function two(){
		console.log('It is second function');
	}

	one();

	return two;
}());
