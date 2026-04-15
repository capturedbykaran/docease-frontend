import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";

const Department = () => {
  const { specialty } = useParams();

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        // ✅ Convert slug → proper text
        const formattedSpecialty = specialty
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        // ✅ Correct fetch
        const res = await fetch(
          `http://localhost:5000/api/doctors?specialization=${formattedSpecialty}&limit=100`
        );

        const data = await res.json();

        // ✅ Directly use backend result
        setDoctors(data.results || []);
      } catch (err) {
        console.error("Error fetching department doctors:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [specialty]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-500">
        Loading doctors...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 capitalize">
        {specialty.replace("-", " ")} Specialists
      </h1>

      {doctors.length === 0 ? (
        <p className="text-gray-500">
          No doctors found in this department.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {doctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Department;