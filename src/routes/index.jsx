import { lazy } from "react";

export const authPagesRoute = [
  {
    path: "register",
    exact: true,
    component: lazy(() => import("@/pages/authentication/Register")),
  },
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

export const authProtectedPagesRoute = [
  {
    path: "home",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/DashboardHome")),
  },
  {
    path: "transactions",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/Transactions")),
  },
  {
    path: "earnings",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/Earnings")),
  },
  {
    path: "airtime",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/Airtime")),
  },
  {
    path: "mobiledata",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/MobileData")),
  },
  {
    path: "sme",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/SMEData")),
  },
  {
    path: "refer-and-earn",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/ReferAndEarn")),
  },
  {
    path: "settings",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/Settings")),
  },
  {
    path: "support",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/Support")),
  },
];
