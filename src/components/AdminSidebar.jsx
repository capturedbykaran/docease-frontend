import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, UserPlus, Users, Shield, LogOut } from "lucide-react";

/*
====================================================
📌 Admin Sidebar (FINAL)
====================================================
*/

const AdminSidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin-dashboard", icon: LayoutDashboard },
    { name: "Add Doctor", path: "/admin-dashboard/add-doctor", icon: UserPlus },
    { name: "Manage Doctors", path: "/admin-dashboard/manage-doctors", icon: Users },
    { name: "Manage Admins", path: "/admin-dashboard/manage-admins", icon: Shield },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-md fixed left-0 top-0 p-5 flex flex-col justify-between">

      {/* Top */}
      <div>
        <h1 className="text-xl font-bold text-blue-600 mb-8">
          DocEase Admin
        </h1>

        <div className="space-y-3">
          {menu.map((item, index) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Logout */}
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/admin-login";
        }}
        className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        <LogOut size={16} />
        Logout
      </button>
    </div>
  );
};

export default AdminSidebar;