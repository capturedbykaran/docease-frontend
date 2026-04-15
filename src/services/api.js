// 📌 Central API configuration

export const BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

// 🔥 Get all doctors with optional filters
export const fetchDoctors = async (params = "") => {
  try {
    const res = await fetch(`${BASE_URL}/doctors${params}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching doctors:", err);
  }
};

// 🔥 Get doctor by ID
export const fetchDoctorById = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/doctors/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching doctor:", err);
  }
};