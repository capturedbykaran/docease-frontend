import {
  Search,
  Calendar,
  BadgeCheck,
  Clock,
} from "lucide-react";

/*
====================================================
📌 Why Choose Us Section (UPDATED ICONS)
====================================================
*/

const WhyChooseUs = () => {
  const features = [
    {
      title: "Find Specialists",
      desc: "Search by specialty, name, or location",
      icon: Search,
    },
    {
      title: "Easy Booking",
      desc: "Schedule appointments instantly",
      icon: Calendar,
    },
    {
      title: "Verified Doctors",
      desc: "All doctors are certified professionals",
      icon: BadgeCheck,
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock patient assistance",
      icon: Clock,
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-2">
          Why Choose Us
        </h2>

        <p className="text-gray-500 mb-12">
          Everything you need to find and book the right doctor
        </p>

        <div className="grid md:grid-cols-4 gap-10">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index}>
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon className="text-blue-600" size={28} />
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;