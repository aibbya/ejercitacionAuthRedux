const userIsLogged = () => {
    const token = localStorage.getItem("token");
  
    if (token && token) {
      return true;
    }
    return false;
  };

  
export default userIsLogged;