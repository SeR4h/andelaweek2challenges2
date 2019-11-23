

function fizzbuzz(Fizz,Buzz){
var x =  Fizz.length + Buzz.length;
if(x%3==0){
console.log('Fizz array of ',Fizz);
}
if(x%5==0){
console.log('Buzz array of',Buzz);
}
if(x%5==0&&x%3==0){ 
console.log('Fizzbuzz array with a combination',Fizz, Buzz);
}
}

var a= [ 's', 'a', 'r','a','h' ]; 
var b= [ 'n', 'a', 'k','y', 'e', 'm', 'b','e','S','N'];
var c=['s', 'e', 'r','a','h'];
var d=['s', 'e', 'r','a'];

console.log('RETURNS FIZZ =>');
fizzbuzz(a,d);
console.log('RETURNS BUZZ =>');
fizzbuzz(a,c);
console.log('RETURNS FIZZBUZZ =>');
fizzbuzz(a,b);

