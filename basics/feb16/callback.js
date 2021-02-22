window.onload = () => {
  const button = document.querySelector("button"); //getElemntById() , getElementsByClassName[0] , getElementsByTagName , querySelectorAll[0]
  const myDiv = document.querySelector("h1");

  button.addEventListener("click", () => {
    showLoadingText("Trying to fetch the data");
    authenticateTheUser((isAuthenticated) => {
      if (isAuthenticated) {
        getTheData((userData) => {
            massageTheData((massagedData)=>{
                showLoadingText("Massaging is done"+userData.user);
            });
        });
      }
    });
  });


  const massageTheData = (cb)=>{
      cb("Massaged the data...")
  }

  const getTheData = (cb) => {
    showLoadingText("Fetching the User data");
    setTimeout(() => {
      const userData = { user: "Dhana" }; //from server
      cb(userData);
    }, 3000);
  };

  const authenticateTheUser = (isAuth) => {
    showLoadingText("Authenticating the user...");

    setTimeout(() => {
      const isAuthenticated = true; //from server
      isAuth(isAuthenticated);
    }, 5000);
  };

  const showLoadingText = (text) => {
    myDiv.textContent = text;
  };

};
