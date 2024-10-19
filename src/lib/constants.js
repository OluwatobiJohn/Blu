import {
  HomeIcon,
  TransactionIcon,
  EarningsIcon,
  AirtimeIcon,
  MobileDataIcon,
  SMEDataIcon,
  ReferEarnIcon,
  SupportIcon,
  SettingsIcon,
  LogoutIcon,
} from "../assets/svgs";

export const SIDEBAR_CONSTANTS = [
  {
    link: "/app/home",
    icon: HomeIcon,
    text: "Dashboard",
  },
  {
    link: "/app/transactions",
    icon: TransactionIcon,
    text: "Transactions",
  },
  {
    link: "/app/earnings",
    icon: EarningsIcon,
    text: "Earnings",
  },
  {
    link: "/app/airtime",
    icon: AirtimeIcon,
    text: "Airtime",
  },
  {
    link: "/app/mobiledata",
    icon: MobileDataIcon,
    text: "Mobile Data",
  },
  {
    link: "/app/sme",
    icon: SMEDataIcon,
    text: "SME Data",
  },
  {
    link: "/app/refer-and-earn",
    icon: ReferEarnIcon,
    text: "Refer & Earn",
  },
  {
    link: "/app/support",
    icon: SupportIcon,
    text: "Support",
  },
  {
    link: "/app/settings",
    icon: SettingsIcon,
    text: "Settings",
  },
  {
    icon: LogoutIcon,
    text: "Logout",
  },
];
