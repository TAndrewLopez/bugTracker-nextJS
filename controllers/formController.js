const attemptTokenLogin = async (token) => {
  const options = {
    method: "GET",
    headers: {
      token,
    },
  };
  const user = await fetch("api/auth", options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  if (!user) {
    console.log("display whatever error message");
    return;
  }

  //TODO: IF USER EXIST SET AUTH STATUS IN REDUX STORE IF NOT RESET FORM AND DISPLAY ERROR MESSAGES
  console.log("are you there", user);
};

export { attemptTokenLogin };
