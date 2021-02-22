// // let greet:Function;

// let greet : (a:string , b:string)=>void;

// greet = (name:string , greeting:string)=>{
//   console.log(`${name} says ${greeting}`);
// }

//  let calc: (a:number , b:number , c:string)=> number;

//  calc=(numOne:number , numTwo:number , action:string)=>{
//   if(action == "add"){
//     return numOne+numTwo;
//   }
//   else{
//     return numTwo-numOne;
//   }
//   }


let logDetails:(obj:{name:string , age:number})=>void;

logDetails = (ninja:{name:string , age:number})=>{
  console.log(`${ninja.age}`)
}