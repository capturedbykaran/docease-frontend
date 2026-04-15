import { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import { BASE_URL } from "../services/api";

/*
====================================================
📌 Doctors Page (FINAL)
👉 Search
👉 Filters (gender, experience, specialization)
👉 Pagination
====================================================
*/

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔎 Filters
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState(0);
  const [specialization, setSpecialization] = useState("");

  // 📄 Pagination
  const [page, setPage] = useState(1);
  const limit = 10;
  const [totalPages, setTotalPages] = useState(1);

  /*
  ====================================================
  📌 Fetch Doctors with Filters
  ====================================================
  */
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);

        const query = new URLSearchParams({
          page,
          limit,
          name: search,            // ✅ backend expects "name"
          gender,
          specialization,
          minExp: experience,      // ✅ backend expects minExp
        });

        const res = await fetch(
          `${BASE_URL}/doctors?${query.toString()}`
        );

        const data = await res.json();

        setDoctors(data.results || []);
        setTotalPages(data.totalPages || 1);

      } catch (err) {
        console.error("Error fetching doctors:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [page, search, gender, experience, specialization]);

  /*
  ====================================================
  📌 UI
  ====================================================
  */

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* 🔥 TITLE */}
      <h1 className="text-3xl font-bold mb-6">Doctors</h1>

      {/* 🔍 SEARCH + FILTER BAR */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">

        {/* Search */}
        <div className="flex w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search doctor name"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full border px-4 py-2 rounded-l-lg"
          />
          <button className="bg-blue-600 text-white px-4 rounded-r-lg">
            Search
          </button>
        </div>

        {/* Gender */}
        <select
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
            setPage(1);
          }}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="">All Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        {/* Specialization */}
        <select
          value={specialization}
          onChange={(e) => {
            setSpecialization(e.target.value);
            setPage(1);
          }}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="">All Specialization</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Orthopedic">Orthopedic</option>
          <option value="Dentist">Dentist</option>
        </select>
      </div>

      {/* 🎚 EXPERIENCE SLIDER */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">

        {/* Label */}
        <span className="text-sm font-medium whitespace-nowrap">
          Exp: {experience}+ yrs
        </span>

        {/* Slider */}
        <div className="w-full md:w-1/2">
          <input
            type="range"
            min="0"
            max="40"
            value={experience}
            onChange={(e) => {
              setExperience(e.target.value);
              setPage(1);
            }}
            className="w-full"
          />
        </div>

      </div>

      {/* 🔄 LOADING */}
      {loading ? (
        <div className="text-center text-gray-500">
          Loading doctors...
        </div>
      ) : doctors.length === 0 ? (
        <p className="text-gray-500">No doctors found.</p>
      ) : (
        <>
          {/* 🧑‍⚕️ DOCTOR LIST */}
          <div className="space-y-6">
            {doctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>

          {/* 📄 PAGINATION */}
          <div className="flex justify-center items-center gap-4 mt-10">

            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 border rounded-lg disabled:opacity-50"
            >
              Previous
            </button>

            <span className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Page {page} of {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 border rounded-lg disabled:opacity-50"
            >
              Next
            </button>

          </div>
        </>
      )}
    </div>
  );
};

export default Doctors;