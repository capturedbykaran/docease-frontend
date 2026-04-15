import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/*
====================================================
📌 Layout Wrapper
👉 Common UI for all pages
====================================================
*/

const Layout = () => {
  return (
    <>
      {/* 🔝 Navbar */}
      <Navbar />

      {/* 🔥 Page Content */}
      <main className="pt-16 min-h-screen">
        <Outlet />
      </main>

      {/* 🔻 Footer */}
      <Footer />
    </>
  );
};

export default Layout;