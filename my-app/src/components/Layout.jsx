import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <main className="pb-[0vw]">
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
