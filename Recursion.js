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
console.log(reverse('awesome'))