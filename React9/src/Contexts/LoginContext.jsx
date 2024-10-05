import {  createContext, useState } from "react";
export const loginContextObj = createContext();


function LoginContext({ children }) {
  // state {userLoginStatus,currentUSer}
  const [userLoginStatus, setUserLoginStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loginErr, setLoginErr] = useState(null);

  function handleUserLogin(data) {

    const { username, password } = data;

    // Fetch user details
    fetch(`http://localhost:3000/users?username=${username}&password=${password}`, { method: "GET" })
      .then((res) => res.json())
      .then(userObj => {
        if (userObj.length !== 0) {
          setUserLoginStatus(true);
          setCurrentUser(userObj[0]);
          setLoginErr(null);
        } else {
          setLoginErr({ message: "Invalid Username or Password" });
        }
      })
      .catch(err => setLoginErr(err));
  }



  function userLogOut() {
    setCurrentUser(null);
    setUserLoginStatus(false);
    setLoginErr(null);
}


  return (
    <loginContextObj.Provider value={{ handleUserLogin,userLogOut, userLoginStatus, currentUser, loginErr,setCurrentUser }}>
      {children}
    </loginContextObj.Provider>
  );
}

export default LoginContext;