import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";

/*
====================================================
📌 Admin Dashboard Layout (FINAL)
👉 Sidebar + Outlet
👉 Protected
====================================================
*/

const AdminDashboard = () => {
  const navigate = useNavigate();

  // 🔐 Protect route
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin-login");
    }
  }, [navigate]);

  return (
    <div className="flex">

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="ml-64 w-full min-h-screen bg-gray-100 p-6 pt-10">
        <Outlet />
      </div>

    </div>
  );
};

export default AdminDashboard;