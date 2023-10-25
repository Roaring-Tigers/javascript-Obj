
let obj1 = {
    a: 10,
    b: 20,
    c: 30
}

let obj2 = {
    a: 100,
    b: 220,
    c: 300
}


// let obj3 = {a: 110, b:240, c:330}
let obj3 = {}

for(let key in obj1){
     obj3[key] = obj1[key] + obj2[key]
}

console.log(obj3)


