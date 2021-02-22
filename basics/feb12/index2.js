// let promise = new Promise(function (resolve, reject) {
//   let x = 100;

//   x = 100 + 10;

//   if (x == 101) {
//     resolve({ message: "Success", isResolved: true });
//   } else {
//     reject({ message: "Failure", isResolved: false });
//   }
// });


// // fetch API : part if web api utility library
// // it talks to apis and gets reponses
// //responses have state associated with it'
// //those are represented by 'status'
// //the reponses acrry data , headers , status , + (promise)

// //=================================================================
// promise.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.error(error)
// })




const getData=()=>{

    return new Promise(function(resolve , reject){
        
        //mocking the api behaviour
        setTimeout(function(){
            //another api call server<down> : 5 secs
            reject({error:"error occurred"});

        }, 5000);
    })
    
}


const callApi= async ()=>{
    const dataResponse = await getData().then((response)=>{
        console.log(response)
    }).catch((error)=>{
        console.log(error);
    })

}

callApi();







