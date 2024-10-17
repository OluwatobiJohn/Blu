import { lazy } from "react";

export const authPagesRoute = [
  {
    path: "login",
    exact: true,
    component: lazy(() => import("@/pages/authentication/Login")),
  },
  {
    path: "forgotpassword",
    exact: true,
    component: lazy(() => import("@/pages/authentication/ForgotPassword")),
  },
  {
    path: "newpassword/confirm",
    exact: true,
    component: lazy(() => import("@/pages/authentication/NewPassword")),
  },
];
