function anagram(str1,str2) {
    var lookup = {};
    for(let i = 0;i < str1.length;i++){
       let letter = str1[i];
       lookup[letter] ? lookup[letter] += 1 :lookup[letter] = 1;
    }
    console.log(lookup);
    for(let i = 0;i < str2.length;i++){
       let letter2 = str2[i];
       if(!lookup[letter2]){
         return false;
       }else{
         lookup[letter2] -=1;
       }
    }
    console.log(true);
}
//anagram('anaram','nagrama')

//find first pair and do some of its ([-2,-1,0,1,4]])  ==> (-1+1 = 0) and return values
function findFirstPair(arr) {
    let left = 0;
    let right = arr.length-1;
    //console.log(right);
    while (left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0){
           return [arr[left],arr[right]];
        }else if(sum > 0){
           right--;
        }else{
           left++;
        }
    }
}
//findFirstPair([-3,-2,-1,0,6,4])

function reduce(arr1) {
   //let initval = 0;
   let sum = arr1.reduce(function (a,b) {
      return a+b;
   });
   console.log(sum);
}
//reduce([1,2,3,4,5])

//Find unique values in an sorted array
function uniqueValue(arr1) {
   if(arr1.length === 0){
     return 0;
   }
   let i = 0;
   let result = [];
   for(let j = 1;j < arr1.length;j++){
       if(arr1[i] !== arr1[j]){
         result.push(arr1[i]);
         i++;
         arr1[i] = arr1[j];
       }
   }
   console.log(i+1);
   console.log(result)
   // let count12 = new Set(arr1).size;
   // console.log(count12);

}
//uniqueValue([1,1,2,2,3,6,6,6,6,7,8,9])

function array(arr) {
   console.log(arr[arr.length-1])
}
array([9,8,7,5])