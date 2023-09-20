import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/main/Main";
import EmployeesPage from "../pages/employees/EmployeesPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/employees" element={<EmployeesPage />} />
    </Routes>
  );
}

export default AppRoutes;
