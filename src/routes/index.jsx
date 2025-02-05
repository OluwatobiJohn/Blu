import { lazy } from "react";

export const authProtectedPagesRoute = [
  {
    path: "home",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/DashboardHome")),
  },
  {
    path: "requests",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/DashboardHome")),
  },
  {
    path: "earnings",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/DashboardHome")),
  },
  {
    path: "airtime",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/DashboardHome")),
  },
  {
    path: "mobiledata",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/DashboardHome")),
  },
  {
    path: "sme",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/DashboardHome")),
  },
  {
    path: "refer-and-earn",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/DashboardHome")),
  },
  {
    path: "settings",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/DashboardHome")),
  },
  {
    path: "support",
    exact: true,
    component: lazy(() => import("@/pages/dashboard/DashboardHome")),
  },
];
