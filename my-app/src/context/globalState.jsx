"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const useGlobalContext = () => useContext(UserContext);
const axios = require('axios');

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
const WOOCOMMERCE_CONSUMER_KEY = process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY;
const WOOCOMMERCE_CONSUMER_SECRET = process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET;


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
  const [cartCount, setCartCount] = useState(0);
  const [checkout, setCheckout] = useState(null);
  const [openCartDrawer, setOpenCartDrawer] = useState(false);
  const [productsAddedToCart, setProductsAddedToCart] = useState([]);
  const [openSignupModel, setSignupModel] = useState(false);
  const [openForgetModel, setForgetModel] = useState(false);
  const [openOtpModel, setOtpModel] = useState(false);
  const [openResetModel, setResetModel] = useState(false);
  const [otpReset, setOtpReset] = useState();
  const [dataForResetPassword, setDataForResetPassword] = useState({
    oldPassword: "", email: "",
    otp: "", newPassword: "",
  });

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
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Error status:", error.response.status);
      } else {
        console.error(error.message);
      }
      throw error;
    }
  };

  const CreateWooCommerceData = async (endpoint, data) => {
    try {
      const response = await axios.post(`${WORDPRESS_API_URL}/${endpoint}`, data, {
        auth: {
          username: WOOCOMMERCE_CONSUMER_KEY,
          password: WOOCOMMERCE_CONSUMER_SECRET,
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      return response?.data;
    } catch (error) {
      if (error.response) {
        console.error("Error status:", error.response.status, error.response.message);
      } else {
        console.error(error.message);
      }
      throw error;
    }
  };

  const updateWooCommerceData = async (endpoint, itemId, data) => {
    try {
      const response = await axios.put(`${WORDPRESS_API_URL}/${endpoint}/${itemId}`, data, {
        auth: {
          username: WOOCOMMERCE_CONSUMER_KEY,
          password: WOOCOMMERCE_CONSUMER_SECRET,
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      return response?.data;
    } catch (error) {
      if (error.response) {
        console.error("Error status:", error.response.status, error.response.message);
      } else {
        console.error(error.message);
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

  useEffect(()=> {
    if (!cartCount){
      const storedProducts = JSON.parse(localStorage.getItem("productsAddedToCart")) || [];
      setCartCount(storedProducts?.length);
    }
  }, [cartCount]);

  return (
    <UserContext.Provider
      value={{
        login,
        setLogin,
        openLoginModel,
        setLoginModel,
        tokenInLocal,
        logout,
        mobileSidebarOpen,
        toggleSidebar,
        setMobileSidebarOpen,
        fetchWooCommerceData,CreateWooCommerceData,updateWooCommerceData,
        cartCount,
        setCartCount,
        checkout, productsAddedToCart, setProductsAddedToCart,
        setCheckout, openCartDrawer, setOpenCartDrawer,
        openSignupModel, setSignupModel,
        openForgetModel, setForgetModel,
        openOtpModel, setOtpModel,
        openResetModel, setResetModel,
        otpReset, setOtpReset,
        dataForResetPassword, setDataForResetPassword
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
