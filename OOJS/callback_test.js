//callback function
function multiplyByTwo(a, b, c, callback) {
    var i, ar = [];
    for(i = 0; i < 3; i++){
        ar[i] = callback(arguments[i] * 2); //not ar
    }
    return ar;
}

multiplyByTwo(1,2,3, function(a){
    return a+1;
});
/*
--let pass functions without declaring variables, that means less variables;
--delegate the responsibility to call one function inside other, that is less code to write 
--HELP WITH Performance BY DEFERRING THE EXECUTION OR BY UNBLOCKING CALLS
*/

//immediate function
(function(name){
    console.log('Hello ' + name);
    }('sanjay'));
/* reduce extra global variable.
DRAWBACK: cannot execute the same function TWICE.
Best suited for one time initialization
EXAMPLE:
*/

var result = (function (){
    var a = 3;
    return a;
}());
// is same as
var result = function (){
    var a = 3;
    return a;
}();

