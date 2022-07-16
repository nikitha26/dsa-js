//Input:'Hello'
//Output:return obj with cout how many charactes each string
function count(str) {
    var lowerStr = str.toLowerCase().replace(/ /g,'');
    var obj = {};
    for(var i= 0;i < lowerStr.length;i++){
        //var char = str[i].toLowerCase().replace(/ /g,'');
        if(/[a-z0-9]/.test(lowerStr[i])){
            if(obj[lowerStr[i]] > 0){
                obj[lowerStr[i]]++;
            }else{
                obj[lowerStr[i]] = 1;
            }
        }
    }
    console.log(obj);
}
//['a','b','a','c','d','c','!','@@@']
//count('Hello');

//console.log('hello'.charCodeAt(0));
 
function Code(x) {
    var Code = x.charCodeAt(0);
    if((Code > 96 && Code < 126)){
        console.log(x+"-"+Code)
    }else{
        console.log('x value not in between');
    }
}
//Code('12')


function same(arr1,arr2) {
    for(var i = 0;i < arr1.length;i++){
      var correctIndex = arr2.indexOf(arr1[i] ** 2);
      if(correctIndex === -1){
        return false;
      }
        arr2.splice(correctIndex,1);
      
      //console.log(arr2);
    }
    return true;
}
//It is taking so many loops
//console.log(same([1,2,3,4],[1,9,16]))   

function same2(arr1,arr2) {
   if(!arr1 || !arr2){
      console.log('Not array')
   }
   if(arr1.length !== arr2.length){
      console.log('Not equal values in an arry')
   }
   let obj1 = {};
   let obj2 = {};
   for (const value of arr1) {
      obj1[value] = (obj1[value] || 0) + 1;
   }
   for (const value of arr2) {
    obj2[value] = (obj2[value] || 0) + 1;
   }
   console.log(obj1)
   console.log(obj2)
   for (const key in obj1) {
     if(!(key ** 2 in obj2)){
         return false;
     }
      if(obj2[key ** 2] !== obj1[key]){
        return false;
      }
   }
  return true;
}
console.log(same2([2,3,6,2],[4,9,36,25]))

