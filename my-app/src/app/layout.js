import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { UserProvider } from "@/context/globalState";
import SigninModel from "@/components/SigninModel";
import MobileSidebar from "@/components/MobileSidebar";
// import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>

      <UserProvider>
        <body className={inter.className}>
          <Header />

          {children}
          <SigninModel />
          <MobileSidebar />
        </body>
      </UserProvider>
    </html>
  );
}
