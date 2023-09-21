import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/main/Main";
import EmployeesPage from "../pages/employees/EmployeesPage";
import ProfilePage from "../pages/profile/ProfilePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/employees" element={<EmployeesPage />} />
      <Route path="/users/:id" element={<ProfilePage />} />
    </Routes>
  );
}

export default AppRoutes;
