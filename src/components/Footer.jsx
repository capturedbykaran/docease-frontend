import { Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from 'react-icons/fa'
/*
====================================================
📌 Footer (Separated)
====================================================
*/

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Stethoscope className="text-white" />
            </div>
            <h2 className="font-semibold">DocEase</h2>
          </div>

          <p className="text-gray-400 text-sm">
            Connecting you with top healthcare professionals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">

            <li>
              <Link to="/doctors" className="hover:text-white">
                Doctors
              </Link>
            </li>

            <li>
              <Link to="/departments" className="hover:text-white">
                Departments
              </Link>
            </li>

          </ul>
        </div>

        {/* Departments */}
        <div>
          <h3 className="mb-4 font-semibold">Departments</h3>
          <ul className="space-y-2 text-sm text-gray-400">

            <li>
              <Link to="/departments/cardiologist" className="hover:text-white">
                Cardiology
              </Link>
            </li>

            <li>
              <Link to="/departments/orthopedic" className="hover:text-white">
                Orthopedics
              </Link>
            </li>

            <li>
              <Link to="/departments/pediatrician" className="hover:text-white">
                Pediatrics
              </Link>
            </li>
            <li>
              <Link to="/departments" className="hover:text-white">
                Explore More departments →
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-semibold">Contact</h3>

          <p className="text-sm text-gray-400 mb-4">
            capturedbykaran5@gmail.com
          </p>

          {/* 🔥 Social Links */}
          <div>
            <h4 className="mb-3 text-sm font-medium text-gray-300">
              Follow Us
            </h4>

            <div className="flex gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/capturedbykaran"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 transition"
              >
                <SiGithub size={18} color="#fff" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/captured-by-karan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 transition"
              >
                <FaLinkedin size={18} color="#fff" />
              </a>

              {/* Mail */}
              <a
                href="mailto:capturedbykaran5@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 transition"
              >
                <Mail size={18} />
              </a>

            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm border-t border-gray-700 py-4">
        © 2026 DocEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;