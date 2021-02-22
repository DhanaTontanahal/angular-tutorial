window.onload = () => {
  const button = document.querySelector("button");
  const myDiv = document.querySelector("h1");

  button.addEventListener("click", async () => {
    showLoadingText("Trying to fetch the data");
    try {
      const isAuthenticated = await authenticateTheUser();
      if (isAuthenticated) {
        const userData = await getTheData();
        showLoadingText(userData.user);
      }
    } catch (error) {
        showLoadingText("Error occurred while authentication..");
    }
  });

  const getTheData = () => {
    return new Promise((resolve, reject) => {
      showLoadingText("Fetching the User data");
      setTimeout(() => {
        showLoadingText("Loading the data from API...");
        const userData = { user: "Dhana" }; //from server
        resolve(userData);
      }, 3000);
    });
  };

  const authenticateTheUser = () => {
    return new Promise((resolve, reject) => {
      showLoadingText("Authenticating the user...");

      setTimeout(() => {
        const isAuthenticated = true; //from server
        resolve(isAuthenticated);
      }, 5000);
    });
  };

  const showLoadingText = (text) => {
    myDiv.textContent = text;
  };
};
