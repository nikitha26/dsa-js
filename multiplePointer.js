function multiplePointer(str1,str2) {
    if(!str1 || !str2){
        return false;
    }
    var i = 0;
    var j = 0;
    while (j < str2.length) {
        if (str2[j] === str1[i]) {
            console.log(str1[i],str2[j])
            i++;

        }
        //checking first string all words 
        if(i === str1.length){
            return true;
        }
        j++;
    }
    return false;
}                             
console.log(multiplePointer('sing','stirng'))