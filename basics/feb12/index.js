
var axios = require('axios');

//many ways to talk to APIS from javascript
//XmlHttp request object
//fetch api
//axios


// const fetchedTodos = fetch('https://jsonplaceholder.typicode.com/todos/')
// console.log(fetchedTodos);

// const fetchedTodosUsingAxios = axios.get('https://jsonplaceholder.typicode.com/todos');

// .then .catch


// var request = new XmlHttpRequest();
// request.get('url')




// var p1 = new Promise();

//2 possible scenarios in any asynchronous operation
//success 
//failure

//success is handled using .then
//failure is handled using .catch


//Who will say whether it is a succes sor failure

//The API which is serving the request will convey that

//What is process to convey the same?
//How does the API convey if the current request processing is success/failure?

//resolve to say that it is success and you can handle it using .then (as said above)

//reject is used to say that it is a failure and you can handle it using the reject

//new + constructor
