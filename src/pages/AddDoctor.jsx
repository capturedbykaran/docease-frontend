import { useState } from "react";

const AddDoctor = () => {
  const [form, setForm] = useState({
    name: "",
    specialization: "",
    hospital: "",
    experience: "",
    location: "",
    rating: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:5000/api/doctors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // 🔐 important
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data);

      alert("Doctor added!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow max-w-xl">
      <h2 className="text-xl font-semibold mb-4">Add Doctor</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        {Object.keys(form).map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field}
            value={form[field]}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        ))}

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;