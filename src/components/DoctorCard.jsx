import { Link } from "react-router-dom";
import { Star, MapPin, Calendar } from "lucide-react";

/*
====================================================
📌 Doctor Card (Figma Style)
====================================================
*/

const DoctorCard = ({ doctor }) => {
  return (
    <div
      data-aos="fade-up"
      className="border rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-lg transition bg-white"
    >
      {/* LEFT */}
      <div className="flex gap-4 items-start w-full">

        <div className="flex flex-col gap-1">

          <h2 className="text-lg font-semibold text-gray-900">
            {doctor.name}
          </h2>

          <p className="text-blue-600 text-sm font-medium">
            {doctor.specialization}
          </p>

          <p className="text-gray-500 text-sm">
            {doctor.hospital}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-1">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {doctor.experience} yrs
            </span>

            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {doctor.location}
            </span>
          </div>

          <div className="flex items-center gap-1 mt-1">
            <Star className="text-yellow-500" size={16} />
            <span className="text-sm font-medium">
              {doctor.rating}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <div className="w-full md:w-auto flex justify-start md:justify-end">
        <Link
          to={`/doctor/${doctor.id}`}
          className="w-full md:w-auto text-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
        >
          View Profile →
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;