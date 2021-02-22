// var person = {
//     printMsg:function(city){
//         return this.message + 'belongs to '+city;
//     }
// }


// var person1 = {
//     message:"Hello message 1"
// }



// var person2 = {
//     message:"Hello message 2"
// }

// var calledP1  = person.printMsg.call(person1 , "Hyderabad");
// console.log(calledP1)

// console.log(person.printMsg.call(person2))

// console.log(person.printMsg.apply(person2 , ["Blr"]))


var myArr = [62872,23,3,3,32323,32,32,32,232,1,2332,1,2332,89794,78];

console.log(myArr)
console.log(Math.max.apply(null,myArr));