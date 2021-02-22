function isString(value){
    
    if(typeof value === "string" || value instanceof String){
        return true;
    }
    return false;
}

let myString = new String("anotherString");

//null : object
//array : object
//function : object
//new String() : object

// true
// false
// false
// false

console.log(isString('angulart'));
console.log(isString({name:"dhana"}))
console.log(isString(null))
console.log(isString(myString));