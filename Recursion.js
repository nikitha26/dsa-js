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
console.log(factorialByRecursive(4))



function abcd(num) {
    if(num === 1){
        return 1;
    }
    return num * abcd(num - 1);
}
console.log(abcd(5))


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
console.log(findOddValue([1,2,3,4,5,6]))