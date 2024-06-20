"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const useGlobalContext = () => useContext(UserContext);
const axios = require('axios');

const WORDPRESS_API_URL = '';
const WOOCOMMERCE_CONSUMER_KEY = '';
const WOOCOMMERCE_CONSUMER_SECRET = '';


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
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setMobileSidebarOpen((prev) => !prev);
  };
  
  const fetchWooCommerceData = async (endpoint, config = {}) => {
      try {
          const response = await axios.get(`${WORDPRESS_API_URL}/${endpoint}`, {
              ...config,
              auth: {
                  username: WOOCOMMERCE_CONSUMER_KEY,
                  password: WOOCOMMERCE_CONSUMER_SECRET,
              },
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
              }
          });
          console.log('Data fetched successfully:', response.data);
          return response.data;
      } catch (error) {
          if (error.response) {
              // The request was made and the server responded with a status code
              console.error('Error status:', error.response.status);
              console.error('Error data:', error.response.data);
          } else if (error.request) {
              // The request was made but no response was received
              console.error('No response received:', error.request);
          } else {
              // Something happened in setting up the request that triggered an Error
              console.error('Error setting up request:', error.message);
          }
          throw error;
      }
  };
  

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
        login, setLogin, openLoginModel, setLoginModel, tokenInLocal, logout,
        mobileSidebarOpen, toggleSidebar, setMobileSidebarOpen, fetchWooCommerceData
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
