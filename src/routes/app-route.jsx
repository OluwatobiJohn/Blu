import { Navigate, Route, Routes } from "react-router-dom";
import { authProtectedPagesRoute } from ".";
import DashboardLayout from "../pages/dashboard/components/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import { Suspense } from "react";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app/home" replace />} />

      {/* Dashboard Routes */}
      <Route path="app" element={<DashboardLayout />}>
        {authProtectedPagesRoute.map(({ component: Component, path }) => (
          <Route
            path={path}
            key={path}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Component />
              </Suspense>
            }
          />
        ))}
      </Route>
      {/* Dashboard Routes */}
    </Routes>
  );
};

export default AppRoute;
