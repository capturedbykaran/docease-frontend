import { useNavigate } from "react-router-dom";
import { UserPlus, Users, Shield } from "lucide-react";

/*
====================================================
📌 Admin Home (Dashboard Landing)
====================================================
*/

const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Welcome Admin 👋
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        <div
          onClick={() => navigate("/admin-dashboard/add-doctor")}
          className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <UserPlus className="text-blue-600 mb-3" size={28} />
          <h2 className="font-semibold text-lg">Add Doctor</h2>
        </div>

        <div
          onClick={() => navigate("/admin-dashboard/manage-doctors")}
          className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <Users className="text-green-600 mb-3" size={28} />
          <h2 className="font-semibold text-lg">Manage Doctors</h2>
        </div>

        <div
          onClick={() => navigate("/admin-dashboard/manage-admins")}
          className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <Shield className="text-purple-600 mb-3" size={28} />
          <h2 className="font-semibold text-lg">Manage Admins</h2>
        </div>

      </div>
    </div>
  );
};

export default AdminHome;