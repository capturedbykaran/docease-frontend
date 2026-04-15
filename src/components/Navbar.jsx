import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Stethoscope } from "lucide-react";

/*
====================================================
📌 Navbar (Final Version)
👉 Home
👉 Doctors
👉 Departments (dynamic route safe)
👉 Contact Us
👉 Admin Login
====================================================
*/

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Stethoscope className="text-white w-6 h-6" />
          </div>
          <span className="font-semibold text-lg">DocEase</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">

          {/* 🏠 Home */}
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          {/* 👨‍⚕️ Doctors */}
          <Link to="/doctors" className="hover:text-blue-600">
            Doctors
          </Link>

          {/* 🏥 Departments (IMPORTANT FIX) */}
          <Link to="/departments" className="hover:text-blue-600">
            Departments
          </Link>

          {/* 📞 Contact */}
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-blue-600"
          >
            About Us
          </button>

          {/* 🔐 Admin */}
          <Link
            to="/admin-login"
            className="bg-black text-white px-4 py-2 rounded-lg text-sm"
          >
            Admin Login
          </Link>
        </div>

        {/* 📱 Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4">

          <Link to="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>

          <Link to="/doctors" onClick={() => setOpen(false)} className="block">
            Doctors
          </Link>

          <Link to="/departments" onClick={() => setOpen(false)} className="block">
            Departments
          </Link>

          <button
            className="text-left"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              setOpen(false);
            }}
          >
            About Us
          </button>

          <Link
            to="/admin-login"
            onClick={() => setOpen(false)}
            className="bg-black text-white px-4 py-2 rounded-lg text-sm text-center"
          >
            Admin Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;