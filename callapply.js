let personName = {
    fname:"John",
    lname:'Roy',
}
let printFullName = function(h,s){
    //console.log(this.fname+" "+this.lname+" "+ h + s);
}
//printFullName.call(personName,'Hyd','ap');

let name2 = {
    fname:"smith",
    lname:'rock',
}
//printFullName.apply(name2,['hyd','tg'])
let myname = printFullName.bind(name2,'Telanagan','India')
// console.log(myname)
// myname()

//Promises
function fetch(params) {
    return fetch()
        .then(res => {
            res.data
        })
        .catch(err => {
            console.log(err)
        })
}
let promise = new Promise(function(resolve,reject){

})
// async function fetch(params) {
//     try {
//         let res = await fetch(url);
//         console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }

function sum(a,b,...info) {  //rest operator
    console.log(info)   
}
//sum(1,2,3,4,5)

let x = [1,4,2,3];
let y = [10,...x,20,30] //spread operator
//console.log(y);

function sum(a,b,c) {
   console.log(a+b+c);
}
let z = [1,2,6];
//sum(...z)

let obj1 = {
    z:1,
    y:2,
}
let obj2 = {
    z:4,
    ...obj1,
}
//console.log(obj2)


//Shallow and Deep copy objects in js

let developer1 = {
    name:'Nikitha',
    skills:{
        primary:'React',
        scondary:'Js'
    },
    salry:function(params) {
        return 30;
    }
};
let developer2 = developer1
//let developer2 = Object.assign({},developer1); //deep copy
//let developer2 = {...developer1}     //deep copy
//let developer2 = JSON.parse(JSON.stringify(developer1))  //deep copy
developer2.name = 'smith';
developer2.skills.primary = 'Python';

//developer1.name = 'roy';

// console.log(developer1);;
// console.log(developer2);


// let cat = {
//     name:'puppy',
// }
// let dog = cat;
// dog.name = 'pet'

// console.log(cat);
// console.log(dog)

let arr = [1,2,3,4]
let result = arr.reduce(function(p,c,i,arr) {
    console.log(arr)
    return p + c;
})
console.log(result)