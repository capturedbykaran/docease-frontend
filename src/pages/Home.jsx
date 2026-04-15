import { useEffect, useState } from "react";
import { fetchDoctors } from "../services/api";
import DoctorCard from "../components/DoctorCard";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";

/*
====================================================
📌 Home Page
====================================================
*/

const Home = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const getDoctors = async () => {
      const data = await fetchDoctors();

      // 🔥 safe check
      if (data && data.results) {
        setDoctors(data.results);
      } else {
        setDoctors([]); // fallback
      }
    };

    getDoctors();
  }, []);

  return (
    <>
      <Hero />

      <WhyChooseUs />
      <Stats /> 

      <section id="doctors" className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Top Doctors</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
        {/* <div id="how-it-works" className="py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-500">
            Search doctors → View profiles → Choose the best for you
          </p>
        </div> */}
      </section>
    </>
  );
};

export default Home;