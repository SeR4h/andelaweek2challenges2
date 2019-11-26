
function fizzbuzz(Fiz,Buz){
var x =  Fiz.length + Buz.length;
if(x%5==0&&x%3==0){ 
return 'FizzBuzz'
}
if(x%3==0){
 return 'Fizz'
}
if(x%5==0){
 return 'Buzz'
}
}
var a= [ 's', 'a', 'r','a','h' ]; 
var b= [ 'n', 'a', 'k','y', 'e', 'm', 'b','e','S','N'];
var c=['s', 'e', 'r','a'];

console.log(fizzbuzz(a,b));
console.log(fizzbuzz(a,a));
console.log(fizzbuzz(a,c));





