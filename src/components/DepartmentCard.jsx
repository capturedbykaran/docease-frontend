import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";

/*
====================================================
📌 Department Card Component
👉 Used in Home page
====================================================
*/

const DepartmentCard = ({ dept }) => {
  return (
    <Link to={`/departments/${dept.slug}`}>
      <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center">
            <dept.icon className="w-6 h-6 text-blue-600" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
              {dept.name}
            </h3>
            <p className="text-sm text-gray-600">{dept.description}</p>

            <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
              <Users className="w-4 h-4" />
              {dept.doctors} doctors available
            </div>
          </div>

          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
};

export default DepartmentCard;