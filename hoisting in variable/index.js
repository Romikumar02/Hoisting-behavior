
// delcare a variable into console before assigning the value to demostrate hoisting
console.log(sum); // shows the result of undefined

var sum= addNumbers(5,8)

function addNumbers(a,b){
    return a+b;
    var name='romi';
}