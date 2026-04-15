import { useEffect, useState } from "react";
import { Users, TrendingUp } from "lucide-react";
import { BASE_URL } from "../services/api";

const Stats = () => {
  const [stats, setStats] = useState({
    doctors: 0,
    departments: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`${BASE_URL}/doctors/stats`);

        if (!res.ok) throw new Error("Failed to fetch stats");

        const data = await res.json();

        setStats({
          doctors: data.totalDoctors || 0,
          departments: data.totalDepartments || 0,
        });
      } catch (err) {
        console.error("Stats error:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-center">

        {/* Doctors */}
        <div>
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
            <Users className="text-blue-600 w-6 h-6" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900">
            {stats.doctors}
          </h2>

          <p className="text-gray-500 mt-1">
            Experienced healthcare professionals
          </p>
        </div>

        {/* Departments */}
        <div>
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
            <TrendingUp className="text-blue-600 w-6 h-6" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900">
            {stats.departments}
          </h2>

          <p className="text-gray-500 mt-1">
            Comprehensive medical specialties
          </p>
        </div>

      </div>
    </div>
  );
};

export default Stats;