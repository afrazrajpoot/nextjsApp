"use client";
import SigninModel from "@/components/SigninModel";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const useGlobalContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  function tokenInLocal(data) {
    if (data) {
      localStorage.setItem("token", JSON.stringify(data));
      setLogin(true);
      return true;
    }
    return false;
  }
  function logout() {
    localStorage.removeItem("token");
    setLogin(false);
    setLoginModel(false);
  }
  const [login, setLogin] = useState(false);
  const [openLoginModel, setLoginModel] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);
  return (
    <UserContext.Provider
      value={{
        login,
        setLogin,
        openLoginModel,
        setLoginModel,
        tokenInLocal,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
