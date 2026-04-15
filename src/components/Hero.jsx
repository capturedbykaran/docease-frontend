import { Link } from "react-router-dom";
// 1. Import the image from your assets folder
import doctorImage from "../assets/find_doctor2.png";
/*
====================================================
📌 Hero Section (Updated for DocEase)
👉 Focus: Find Doctors (not booking)
====================================================
*/

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-teal-50 to-white pt-28 pb-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
            Discover the Best Care <br />
            <span className="text-teal-600">Without the Hassle</span>
          </h1>

          <p className="text-gray-600 mb-8 text-lg">
            Find trusted doctors, compare expertise, and connect with the
            right specialist — all in one place.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            {/* Primary CTA */}
            <Link
              to="/doctors"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
            >
              Find Doctors
            </Link>

            {/* Secondary CTA */}
            {/* <button
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              How It Works
            </button> */}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div data-aos="fade-left">
          <img
            // src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
            src={doctorImage}
            alt="doctor"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;