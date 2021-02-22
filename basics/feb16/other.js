

// =============================
// Making JAvascript Asynchronous
// ==============================

//Javascript by default is single threaded --> synchronous in nature --> one line executed at a time 

//callback
    //callback hell
//promises
    //chaining problem
//asyncawait

//observables
    //why
    //how do you do that
    //rxjs
    // promises and observables




















// Project:
// 1.)routing
// 2.)CSS improvements
// 3.)forms improvements
//4.)rxjs concepts


// 1.)discussed
//ilike --> {'i' , 'like' , 'mangoes'}
// =======================================
// 2.)//315 --> three hundred and fifteen
// function returnText(number=315){
//     //write code here
//     //get the number of ints in number and getTheSuffVal
    
//     let countOfInoutNum = String(number).length;//3
//     if(countOfInoutNum == 1){
//         return getTheStringVersion(number);
//     }
//     else{
    
//     let stageZeroDivideRes = number % getDivideBy(countOfInoutNum);//315%3
//     let stage1StringValue = getTheStringVersion(Math.floor(number/getDividebyValue(countOfInoutNum)))
//     let stage2StringValue = getTheSuffVal(countOfInoutNum); 
//     return returnText(stageZeroDivideRes);
    
//     }
    
    
    

//     function getDividebyValue(count){
//         if(count == 1){
//             return 1;
//         }
//         else if(count == 2){
//             return 10;
//         }
//         else if(count == 3){
//             return 100;
//         }
//         else if(count == 4){
//             return 1000;
//         }
//         else{
//         //..
//         }
//     }
    
//     function getDivideBy(countOfInputVal){
//         if(countOfInputVal == 1){
//         return countOfInputVal;
//         }
//         if(countOfInputVal == 2){
//             return 10;
//         }
//         if(countOfInputVal == 3){
//             return 100;
//         }
//         else if(countOfInputVal == 4){
//                return 1000;
//         }
//         else{
//         //...
//         }
//     }
    
//     function getTheStringVersion(numberVal){
//         if(numberVal == 1){
//             return "one";
//         }
//         else if(numberVal == 2){
//             return "two";
//         }
//         else if(numberVal == 3){
//             return "three";
//         }
//         else if(numberVal == 5){
//             //..
//         }
        
//     }
    
//     function getTheSuffVal(value){
//         if(value == 3){
//             return "hundred"
//         }
//         else if(value == 4){
//             return "thousand"
//         }
//         else{
//         //..
//         }
//     }
    
    
//     return "three hundred and fifteen"
    
// }

// console.log(returnText(315));