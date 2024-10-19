import { Navigate, Route, Routes } from "react-router-dom";
import OnboardLayout from "../pages/authentication/components/OnboardLayout";
import { authPagesRoute, authProtectedPagesRoute } from ".";
import DashboardLayout from "../pages/dashboard/components/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import { Suspense } from "react";

const AppRoute = () => {
  return (
    <Routes>
      {/* Redirect to login as soon as app mounts */}
      <Route path="/" element={<Navigate to="/auth/login" replace />} />
      {/* Redirect to login as soon as app mounts */}

      {/* Auth Routes */}
      <Route path="auth" element={<OnboardLayout />}>
        {authPagesRoute.map(({ component: Component, path }) => (
          <Route path={path} key={path} element={<Component />} />
        ))}
      </Route>
      {/* Auth Routes */}

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
