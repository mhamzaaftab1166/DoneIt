import React, { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";
import jwtDecode from "jwt-decode";

export default useAuth = (props) => {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const login = (authToken) => {
    const userObj = jwtDecode(authToken);
    setUser(userObj);
    authStorage.storeToken(authToken);
  };

  return { user, setUser, logout, login };
};
