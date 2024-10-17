// import AppLayout from "@/layouts/app";
// import Home from "@/pages/app/home";
import { Navigate, Route, Routes } from "react-router-dom";
import OnboardLayout from "../pages/authentication/components/OnboardLayout";
import { authPagesRoute } from ".";

const AppRoute = () => {
  return (
    <Routes>
      {/* Redirect to login as soon as app mounts */}
      <Route path="/" element={<Navigate to="/auth/login" replace />} />
      {/* Redirect to login as soon as app mounts */}

      <Route path="auth" element={<OnboardLayout />}>
        {authPagesRoute.map(({ component: Component, path }) => (
          <Route path={path} key={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoute;
