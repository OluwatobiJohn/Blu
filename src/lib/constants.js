import {
  Clipboard,
  Hourglass,
  LayoutGrid,
  Link,
  ListChecks,
  SearchCheck,
  Shield,
  SquareUser,
  UserRound,
} from "lucide-react";
import { SettingsIcon, LogoutIcon } from "../assets/svgs";

export const SIDEBAR_CONSTANTS = [
  {
    link: "/app/home",
    icon: LayoutGrid,
    text: "Dashboard",
  },
  {
    link: "/app/requests",
    icon: Hourglass,
    text: "Request",
    inactive: true,
  },
  {
    link: "/app/kyc",
    icon: SearchCheck,
    text: "KYC",
    inactive: true,
  },
  {
    link: "/app/reports",
    icon: Clipboard,
    text: "Reports",
    inactive: true,
  },
  {
    link: "/app/tasks",
    icon: ListChecks,
    text: "Task",
    inactive: true,
  },
  {
    link: "/app/trail",
    icon: Link,
    text: "Audit Trail",
    inactive: true,
  },
  {
    link: "/app/customer",
    icon: UserRound,
    text: "Customers",
    inactive: true,
  },
  {
    link: "/app/users",
    icon: SquareUser,
    text: "Users",
    inactive: true,
  },
  {
    link: "/app/settings",
    icon: SettingsIcon,
    text: "Settings",
    inactive: true,
  },
  {
    link: "/app/admin",
    icon: Shield,
    text: "Administration",
    inactive: true,
  },
  {
    icon: LogoutIcon,
    text: "Logout",
    inactive: true,
  },
];
