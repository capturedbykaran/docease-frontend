import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star, MapPin, Calendar, Phone } from "lucide-react";

/*
====================================================
📌 Doctor Details Page
👉 Shows full doctor information
👉 Route: /doctor/:id
====================================================
*/

const DoctorDetails = () => {
  // 🔹 Get ID from URL
  const { id } = useParams();

  // 🔹 State
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  /*
  ====================================================
  📌 Fetch Single Doctor
  ====================================================
  */
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/doctors/${id}`
        );

        const data = await res.json();

        setDoctor(data);
      } catch (err) {
        console.error("Error fetching doctor:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  /*
  ====================================================
  📌 UI
  ====================================================
  */

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-500">
        Loading doctor details...
      </div>
    );
  }

  if (!doctor) {
    return <p className="text-center mt-10">Doctor not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">

      {/* Top Section */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-6">

        {/* Image */}
        {/* <img
          src={doctor.image || "https://via.placeholder.com/200"}
          alt={doctor.name}
          className="w-40 h-40 rounded-lg object-cover"
        /> */}

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{doctor.name}</h1>

          <p className="text-blue-600 font-medium">
            {doctor.specialization}
          </p>

          <p className="text-gray-600 mt-1">
            {doctor.hospital}
          </p>

          {/* Experience */}
          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            {doctor.experience}
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            {doctor.location}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            {doctor.rating}
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <Phone className="w-4 h-4" />
            {doctor.contact}
          </div>

          {/* Fees */}
          <p className="mt-3 font-semibold text-lg">
            ₹ {doctor.fees}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="bg-black text-white px-6 py-2 rounded-lg">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;