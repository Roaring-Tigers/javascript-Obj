
// shallow copy and deep copy:


// let obj1 = {
//     a: 10,
//     b: 20,
//     c: 30,
// }

// let obj2 = obj1

// obj1.a = 100

// obj2.b = 200

// console.log(obj1)
// console.log(obj2)

// let obj2 = {}
// for(let key in obj1){
//    obj2[key] = obj1[key]
// }

// obj1.a = 100
// obj2.b = 200

// console.log(obj1)
// console.log(obj2)

// spread operator

// let obj2 = {...obj1}




let obj1 = {
    a: 10,
    b : ["apple", "mango", "banana"],
    c : {x:10, y:20}
}

let obj2 = structuredClone(obj1)
// for(let key in obj1){
//    obj2[key] = obj1[key]
// }

// obj2["a"] = 10
// obj2["b"] = ["apple", "mango", "banana"]

obj1.b[1] = "gauava"

// strcuturalClone

console.log(obj1)
console.log(obj2)



