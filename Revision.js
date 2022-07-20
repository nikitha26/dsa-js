//Input:banana;
//Output:1b3a2n

function count(str) {
    let result = '';
    let count = 0;
    let str1 = str.toLowerCase().replace(/ /g,'');
    if(str.length === 0) return false;

    for (let i = 0; i < str1.length; i++) {
        if(str1[i]){
           count++;
        }
        if(count > 0){
          result += count+str1[i];
        }
    }
    console.log(result)
}
//count('Banana')   //Output:1b3a2n

let countCharacters = (string) => {
    let res = '';
    let count = 1;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i + 1]) {
        count++;
      } else {
        count = 1;
      }
      res += count+string[i]
    }
    console.log(res)
  };
   
  countCharacters("banana");