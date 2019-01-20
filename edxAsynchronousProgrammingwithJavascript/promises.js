/*
Creating a new Promise
Sample code to create a promise:
*/
var promise = new Promise(function(resolve, reject) {

    //do stuff

    var isSuccessful = true;

    if (isSuccessful) { /*if everything is successful*/
        resolve("Success!");
    }
    else {              /*if something went wrong*/
        reject(Error("Failure."));
    }
});

/*
new Promise()
The new Promise() constructor is called to create a new promise. The constructor takes in a callback function with the arguments resolve and reject.
*/
var promise = new Promise(function(resolve, reject) {
    
});

/*
Resolve()
The resolve() function is used to change the status of the promise from pending to fulfilled. The value that is passed inside the resolve() function becomes the fulfillment value of the promise.

Once the resolve() function is called, future resolve() and reject() calls no longer have any effect.

Notice how the resolve() method is used to set the fulfillment value of the promise:
*/
resolve("Success!"); //"Success" is set as the fulfillment value of the promise

/*Reject()
The reject() function is used to change the status of the promise from pending to rejected. The value that is passed inside the reject() function becomes the rejection value of the promise.

Once the reject() function is called, future resolve() and reject() calls no longer have any effect.

The resolve function can take in any object as an argument, but one common practice is to pass in a Error object because it provides a more detailed error report. 

Notice how a reject() is used to send an Error object as its reject value:
*/

reject(Error("failure")); //rejection value becomes an Error object

/*
Promise.resolve() and Promise.reject()
Promise.resolve() is used to return a promise that is already fulfilled. Likewise, the Promise.reject() method may be used to return an already rejected promise. Both of these methods can be called outside of the new Promise() constructor.

Notice how the Promise.resolve() method is used to create an already fulfilled promise:
*/


//A resolved promise with fulfillment value "already resolved"
var resolvedPromise = Promise.resolve("already resolved"); 

/*
Notice how the Promise.reject() method is used to create an already rejected promise:
*/
//A rejected promise with rejected value "already rejected"
var rejectedPromise = Promise.reject("already rejected"); 

/*Resolving another Promise
If another promise is passed in as an argument to resolve() then the new promise takes the fulfillment value of the passed in promise.

Notice how resolve() handles another Promise as an argument:
*/
var firstPromise = Promise.resolve("already resolved");

//fullfillment value of secondPromise is "already resolved"
var secondPromise = Promise.resolve(firstPromise); 


/*
Using Promises with Then() and Catch()
The then() and catch() methods are used to handle the results of Promises once they have finished pending. The then() method is used to handle resolved Promises while the catch() method is used to handle rejected Promises. Both of the methods use callback functions. The callback functions should each have one argument representing the Promise result.



Using Promises with Then(onSuccess,onFailure)
The then() method can be called with a success callback and a failure callback as an alternative to using the then() and catch() methods. 

Notice how the then() method is used with a success and failure callback to handle promise results:

*/
promise.then(function(val){//success callback

    console.log(val);

},function(val){//rejection callback

    console.log(val); 

})

/*
Transforming Values
Calling return within then()
Promise results can be transformed by calling the return statement within the then() callback. This will cause the then() method to return a new Promise with the transformed result.

Notice how a new Promise is created with a transformed result using the return statement within the then() callback:
*/
var promise = Promise.resolve("hello");

var promise2 = promise.then(function(result) { 
    console.log(result) //logs "hello"
    return result + " world" //adds " world" to the result and sets this as the new fulfillment value of promise2
});

promise2.then(function(result){
    console.log(result); //logs "hello world"
});
/*

Chaining Transforms
Several transforms can be chained together using multiple then() method calls.

Notice how promise results are transformed using multiple then() methods calls:
*/
var promise = Promise.resolve([1,2,3,4]);

promise.then(function(result) { 
    console.log(result) //logs [1,2,3,4] 
    return result.map(x => x * x); //squares each value in the array

}).then(function(result2){
    console.log(result2) //logs [1,4,9,16]
    return result2.filter( x => x > 10); //filters out elements that are not larger than 10

}).then(function(result3){
    console.log(result3) //logs [16]
    return result3.toString() + "!!"; //converts result3 to a string and adds "!!"

}).then(function(result4){
    console.log(result4) //logs "16!!"
    return result4;  //returns a promise with "16!!" as the fulfillment value

}).catch(function(error){
    console.log(error)
});


/*
Promise.all()
The Promise.all() method is used to process multiple Promises at the same time. The method takes in an array of Promises and then waits for them to all to resolve. Once they have all finished resolving, an array of results can be obtained by using the then() method. If any of the Promises reject, then the Promise.all() method will return the first rejected Promise.

Notice how the Promise.all() method is used to handle multiple Promises at the same time:
*/

var promise1 = Promise.resolve('hello'); 
var promise2 = Promise.resolve({age:2,height:188}) 
var promise3 = 42; //normal values work with Promise.all() too


Promise.all([promise1,promise2,promise3]).then(function(result) { 

    console.log(result) //logs the array ["hello",{age:2,height:188},42]

}).catch(function(error){

    console.log(error) 

});

// Notice how Promise.all() method call rejects when one of the Promises that it is processing rejects:

var promise1 = Promise.resolve('hello'); 
var promise2 = Promise.resolve({age:2,height:188}) 
var promise3 = Promise.reject('failure.'); //rejected promise


Promise.all([promise1,promise2,promise3]).then(function(result) { 

    console.log(result) //doesn't occur since promise3 rejected

}).catch(function(error){

    console.log(error)  //logs 'failure.'

});