import { useEffect, useState } from "react";
import { BASE_URL } from "../services/api";

/*
====================================================
📌 Manage Doctors (UPDATED with Edit Feature)
====================================================
*/

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [form, setForm] = useState({});
  const [showModal, setShowModal] = useState(false);

  // 🔹 Fetch doctors
  const fetchDoctors = async () => {
  const res = await fetch(`${BASE_URL}/doctors`);
  const data = await res.json();

  console.log("API DATA:", data); // 👈 debug once

  setDoctors(data.results || data); // ✅ FIX
};

  useEffect(() => {
    fetchDoctors();
  }, []);

  // 🔹 Delete doctor
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    await fetch(`${BASE_URL}/doctors/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchDoctors();
  };

  // 🔹 Open Edit Modal
  const handleEdit = (doctor) => {
    setSelectedDoctor(doctor);
    setForm(doctor); // prefill
    setShowModal(true);
  };

  // 🔹 Handle Input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Update Doctor
  const handleUpdate = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    await fetch(`${BASE_URL}/doctors/${selectedDoctor.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    setShowModal(false);
    fetchDoctors();
  };

  return (
    <div>

      <h2 className="text-xl font-semibold mb-4">Manage Doctors</h2>

      {/* Doctor List */}
      {doctors.map((doc) => (
        <div
          key={doc.id}
          className="flex justify-between items-center bg-white p-4 rounded mb-3 shadow"
        >
          <span>{doc.name}</span>

          <div className="flex gap-2">
            <button
              onClick={() => handleEdit(doc)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(doc.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* 🔥 EDIT MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

          <div className="bg-white p-6 rounded-xl w-full max-w-lg">

            <h2 className="text-lg font-semibold mb-4">
              Edit Doctor
            </h2>

            <form onSubmit={handleUpdate} className="space-y-3">

              <input
                name="name"
                value={form.name || ""}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Name"
              />

              <input
                name="specialization"
                value={form.specialization || ""}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Specialization"
              />

              <input
                name="hospital"
                value={form.hospital || ""}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Hospital"
              />

              <input
                name="experience"
                value={form.experience || ""}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Experience"
              />

              <input
                name="location"
                value={form.location || ""}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Location"
              />

              <input
                name="rating"
                value={form.rating || ""}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Rating"
              />

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-4">

                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Update
                </button>

              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default ManageDoctors;