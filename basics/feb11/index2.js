const getUsers = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(
      () => resolve([{ id: "jon" }, { id: "andrey" }, { id: "tania" }]),
      2000
    );
  });
};

const getIdFromUser = (user) => {
  return new Promise((resolve, reject) => {
    return setTimeout(resolve(user.id), 1000);
  });
};

const applyBusinessLogicOnIds = (id) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(id.toUpperCase()), 1000);
  });
};

const processReq = async ()=>{
    let allUsers = await getUsers();
    let firstUser = await getIdFromUser(allUsers[0]);
    let appliedLogicOnFirstUser=     await applyBusinessLogicOnIds(firstUser);
    console.log(appliedLogicOnFirstUser)
}


processReq();
// const runAsyncFunctions = async () => {
//     const users = await getUsers()
  
//     for (let user of users) {
//       const userId = await getIdFromUser(user)
//       console.log(userId)
  
//       const capitalizedId = await applyBusinessLogicOnIds(userId)
//       console.log(capitalizedId)
//     }
  
//     console.log(users)
//   }
  
//   runAsyncFunctions()