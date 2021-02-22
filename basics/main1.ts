var x = 10; // type inference


var a: number = 10; //specifying type

var b:string;

var n1 = 10;
var n2 = n1+a;

//BETTER TO USE TYPE ANNOTATIONS INSTEAD OF TYPE INFERENCE

//any time ---> no compile time type checking


// var info:any;

// info=10;
// info="hsghjs";
// info=true;



// enum EyeColor{  Brown , Black  , Blue}

// enum CarType {Big , Small }

// var myEyeColor = EyeColor.Black;

// EyeColor(myEyeColor)


let strAyy:string[]=['Hello', 'Dhana']

let strArr2 : Array<string> = ['Hello' , 'World']

let anyArr:any[]=['Hello' , 1 , 'Test']

//tuyples --> array of specific data type

let myTuple:[string,number] = ["Hello" , 12 ];
myTuple.push(100);



