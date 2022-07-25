//Simple recursive function without for loop
function countDown(num) {
    if(num < 0){
        console.log('all done');
        return;
    }
    console.log(num);
    num--;
    countDown(num)
}
//countDown(3)


function recursive(num) {
    if(num === 1){     //Base case
        return 1;
    }
    return num + recursive(num-1);  //Different Inputs
}
//console.log(recursive(3))
function factorial(num) {
    let total = 1;
    for(let i = num; i > 1;i--){
       total *= i;
    }
    return total;
}
//console.log(factorial(3))

function factorialByRecursive(num) {
    if(num === 1){
        return 1;
    }
    return num * factorialByRecursive(num-1);
}
//console.log(factorialByRecursive(4))



function abcd(num) {
    if(num === 1){
        return 1;
    }
    return num * abcd(num - 1);
}
//console.log(abcd(5))


//Collect Odd Values in an array with helper method

function findOddValue(arr) {
    let result = [];
    function helper(hlperIn) {
        if(hlperIn.length === 0){
            return;
        }
        if(hlperIn[0] % 2 !== 0){
            result.push(hlperIn[0]);
        }
        helper(hlperIn.slice(1))  //Removing first element(which already check)
    }
    
    helper(arr)
    return result;
}
//console.log(findOddValue([1,2,3,4,5,6]))

function power(n1,n2) {
    if(n2 === 0){
        return 1;
    }
    return n1 * power(n1,n2-1);
}
//console.log(power(2,2));

function fac(n1) {
    if(n1 === 1 || n1 ===0){
        return 1;
    }
    return n1 * fac(n1-1);
}
//console.log(fac(7));

function product(arr) {
    // var res = arr.reduce(function(a,b){
    //    return a*b;
    // })
    // return res;
    // let res = 1;
    // for(let i = 0;i < arr.length;i++){
    //    res *= arr[i];
    // }
    // return res;

    if(arr.length === 0){
       return 1;
    }
    return arr[0] * product(arr.slice(1));
}
//console.log(product([1,2,3,10]))

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
//console.log(fib(4))
function reverse(str) {
    if(str.length <= 1){
       return str;
    }
    //return str.split('').reverse().join('');
    return reverse(str.slice(1)) +" " +str[0];
                    // wesome + a;
                    // esome + w;
                    // some + e;
                    // ome + s;
                    // me + o;
                    // e + m;
                    // '' + e;

}
//console.log(reverse('awesome'))

function isPalindrome(str) {
    let x = str.length;
    let mid = Math.floor(x/2);
    for(let i = 0;i < mid; i++){
      if(str[i] != str[x-1-i]){
        return false;
      }
    }
    return true;
}
//console.log(isPalindrome('abcd'))


function isPalindrome(str) {
    if(str.length === 1){
        return true;
    }
    if(str.length === 2){
      return str[0] === str[1];
    }
    if(str[0] === str.slice(-1)){
      return isPalindrome(str.slice(1,-1));
    }
    return false;
}
//console.log(isPalindrome('madam'));



function palin(str) {
    if(str.length === 1){
        return true;
    }
    if(str.length === 2){
       return str[0] === str[1];
    }
    if(str[0] === str.slice(-1)){
       return palin(str.slice(1,-1));
    }
    return false;
}
//console.log(palin('madam'));

function flaten(arr) {
    var newArr = [];
    if(arr.length === 0){
       return;
    }
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            //console.log(arr[i])
            // for(let j = 0; j < arr[i].length; j++){
            //     newArr.push(arr[i][j]);
            // }
            // newArr.concat(arr[i]);
            newArr = newArr.concat(flaten(arr[i]));
        }else{
            newArr.push(arr[i]);
        }
      
    }
    console.log(newArr)
}
//flaten([1, 2, 3, [4, 5]]);

function capitalizeFirst(arr) {
    var res = [];
    if(arr.length === 0){
        return;
    }
    for(let i = 0; i < arr.length; i++){
        var x = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        res.push(x)
    }
    console.log(res)
   
}
//capitalizeFirst(['car','taco','banana']);
//var sum;
function nestedEvenSum (obj,sum=0) {
    
    for (var key in obj) {
        if(typeof(obj[key]) === 'object'){
           sum += nestedEvenSum(obj[key]);
        }else if(typeof(obj[key]) === 'number' && obj[key] % 2 === 0){
           sum += obj[key];
        }
    }
    return sum;
}
  
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 3,
        notANumber: true,
        alsoNotANumber: "yup",
        otherObj: {
            superInner: 6,
        }
      }
    }
  }

  //console.log(nestedEvenSum(obj1));

function strigify(obj) {
    var newObj = {}
    for (const key in obj) {
        if(typeof(obj[key]) === 'number'){
            newObj[key] = obj[key].toString();
        }else if(typeof(obj[key]) === 'object' && !Array.isArray(obj[key])){
            newObj[key] = strigify(obj[key]);
        }else{
            newObj[key] = obj[key];
        }
    }
    //console.log(newObj)
}
//strigify(obj1)

function capitalized(arr) {
    var res = [];
    if(arr.length === 0){
       return;
    }
    for(let i = 0; i < arr.length; i++){
       res.push(arr[i].toUpperCase());
    }
    return res;
}
//console.log(capitalized(['i', 'am', 'learning', 'recursion']))

var res = [];
function collectString(obj) {
   
    for (const key in obj) {
        if(typeof(obj[key]) === 'string'){
           res.push(obj[key])
        }else if(typeof(obj[key]) === 'object'){
           collectString(obj[key]);
        }
    }
    console.log(res)
}
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
collectString(obj)