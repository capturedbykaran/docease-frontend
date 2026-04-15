import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { departmentsData } from "../utils/departmentsData";
import { BASE_URL } from "../services/api";

/*
====================================================
📌 Departments Page (FINAL)
👉 Correct count
👉 Clean slug routing
====================================================
*/

const Departments = () => {
  const [counts, setCounts] = useState({});
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/departments/count`)
      .then((res) => res.json())
      .then((data) => {
        setCounts(data); // ✅ already in perfect format
      })
      .catch((err) =>
        console.error("Error fetching department counts:", err)
      );
  }, []);

  // 🔍 Search filter
  const filtered = departmentsData.filter((dept) =>
    dept.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">

      {/* Header */}
      <h1 className="text-3xl font-bold mb-2">
        Medical Departments
      </h1>

      <p className="text-gray-500 mb-6">
        Browse all available departments and find the right specialist
      </p>

      {/* Search */}
      <div className="mb-10 max-w-xl relative">
        <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search departments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-blue-50 outline-none"
        />
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filtered.map((dept, index) => {
          const Icon = dept.icon;

          // 🔥 Create URL-safe slug
          const slug = dept.name.toLowerCase().replace(/\s+/g, "-");

          return (
            <div
              key={index}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              {/* Icon */}
              <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-xl mb-4">
                <Icon className="text-blue-600 w-6 h-6" />
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold mb-1">
                {dept.name}
              </h2>

              {/* Count */}
              <p className="text-gray-500 text-sm mb-4">
                {counts[dept.name] || 0} Doctors Available
              </p>

              {/* Button */}
              <button
                onClick={() => navigate(`/departments/${slug}`)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Explore Doctors →
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Departments;