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
anagram('anagram','nagama')