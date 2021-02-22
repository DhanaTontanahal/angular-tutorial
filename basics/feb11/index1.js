var userLeft = false;
var userWatching = false;
function watchTutCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "userLeft",
      message: "hi come again",
    });
  } else if (userWatching) {
    errorCallback({
      name: "userWatching",
      message: "how are you",
    });
  } else {
    callback({
      name: "good",
      message: "inside all false",
    });
  }
}

// watchTutCallback(
//   (message) => {
//     console.log(message);
//   },
//   (error) => {
//     console.error("error");
//   }
// );

function watchTutCallback() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "userLeft",
        message: "hi come again",
      });
    } else if (userWatching) {
      reject({
        name: "userWatching",
        message: "how are you",
      });
    } else {
      resolve({
        name: "good",
        message: "inside all false",
      });
    }
  });
}



// watchTutCallback().then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err)
// })


