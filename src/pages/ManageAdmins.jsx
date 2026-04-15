import { useEffect, useState } from "react";
import { BASE_URL } from "../services/api";

/*
====================================================
📌 Manage Admins (FINAL - SAFE + PRODUCTION READY)
====================================================
*/

const ManageAdmins = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /*
  ====================================================
  📌 Fetch Admins
  ====================================================
  */
  const fetchAdmins = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");

      const res = await fetch(`${BASE_URL}/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      console.log("Admins API Response:", data); // 🔍 DEBUG

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch admins");
      }

      // 🔥 SAFE HANDLING
      if (Array.isArray(data)) {
        setAdmins(data);
      } else if (Array.isArray(data.results)) {
        setAdmins(data.results);
      } else if (Array.isArray(data.data)) {
        setAdmins(data.data);
      } else {
        setAdmins([]);
      }

    } catch (err) {
      console.error("Error fetching admins:", err);
      setError(err.message);
      setAdmins([]);
    } finally {
      setLoading(false);
    }
  };

  /*
  ====================================================
  📌 Delete Admin
  ====================================================
  */
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${BASE_URL}/admin/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      // 🔄 Refresh list
      fetchAdmins();
    } catch (err) {
      alert("Error deleting admin");
      console.error(err);
    }
  };

  /*
  ====================================================
  📌 Load on mount
  ====================================================
  */
  useEffect(() => {
    fetchAdmins();
  }, []);

  /*
  ====================================================
  📌 UI
  ====================================================
  */

  if (loading) {
    return (
      <div className="p-6 text-gray-500">
        Loading admins...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">
        Manage Admins
      </h2>

      {/* Empty State */}
      {admins.length === 0 ? (
        <p className="text-gray-500">
          No admins found
        </p>
      ) : (
        <div className="space-y-3">
          {admins.map((admin) => (
            <div
              key={admin.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <div>
                <p className="font-medium">{admin.email}</p>
                <p className="text-sm text-gray-500">
                  {admin.role}
                </p>
              </div>

              <button
                onClick={() => handleDelete(admin.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageAdmins;