import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Department from "./pages/Department";
import DoctorDetails from "./pages/DoctorDetails";
import AdminLogin from "./pages/AdminLogin";
import Departments from "./pages/Departments";

// 🔥 ADMIN
import AdminDashboard from "./pages/AdminDashboard";
import AdminHome from "./pages/AdminHome";
import AddDoctor from "./pages/AddDoctor";
import ManageDoctors from "./pages/ManageDoctors";
import ManageAdmins from "./pages/ManageAdmins";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* MAIN WEBSITE */}
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="departments" element={<Departments />} />
          <Route path="departments/:specialty" element={<Department />} />
          <Route path="doctor/:id" element={<DoctorDetails />} />
          <Route path="admin-login" element={<AdminLogin />} />

        </Route>

        {/* 🔥 ADMIN DASHBOARD (OUTSIDE MAIN LAYOUT) */}
        <Route path="/admin-dashboard" element={<AdminDashboard />}>

          <Route index element={<AdminHome />} />
          <Route path="add-doctor" element={<AddDoctor />} />
          <Route path="manage-doctors" element={<ManageDoctors />} />
          <Route path="manage-admins" element={<ManageAdmins />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;