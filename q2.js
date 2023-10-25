
let obj1 = {
    a:100,
    b:200,
}

let obj2 = {
    c:1000,
    d:2000,
}


// let obj3 = {}


// for(let t in obj1){
//     obj3[t] = obj1[t]
// }
// console.log(obj3)
// for(let t in obj2){
//     obj3[t] = obj2[t]
// }
// console.log(obj3)

// arrays => spread opt:  

let obj3 = {...obj1, ...obj2}
console.log(obj3)
