window.onload = () => {
  const button = document.querySelector("button");
  const myDiv = document.querySelector("h1");

  button.addEventListener("click", () => {
    showLoadingText("Trying to fetch the data");

    authenticateTheUser().then((isAuthenticated) => {
      console.log("in line 9...")
      if (isAuthenticated) {
        console.log("never printed ?")
        return getTheData()
          .then((userData) => {
            showLoadingText(userData.user);
          })
          .catch((error) => {
            showLoadingText(error.message);
          });
      }
    }).catch((authenticationError)=>{
        showLoadingText(authenticationError.message);
    })
  });

  const massageTheData = (cb) => {
    cb("Massaged the data...");
  };

  const getTheData = () => {
    return new Promise((resolve, reject) => {
      showLoadingText("Fetching the User data");
      setTimeout(() => {
        showLoadingText("Loading the data from API...");
        const userData = { user: "Dhana" }; //from server
        if (userData.user == "Dhana") {
          resolve(userData);
        }
        reject({ message: "Error occurred" });
      }, 3000);
    });
  };

  const authenticateTheUser = () => {
    return new Promise((resolve, reject) => {
      showLoadingText("Authenticating the user...");

      setTimeout(() => {
        showLoadingText("User yet to authenticate...");
        const isAuthenticated = true; //from server
        if(isAuthenticated){
            resolve(false);
        }
        else{
            reject({message:"Authentication failed"})
        }
        
      }, 5000);
    });
  };

  const showLoadingText = (text) => {
    myDiv.textContent = text;
  };
};
