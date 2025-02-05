import React from "react";
import StatsCard from "./components/StatsCard";
import QuickLinkComp from "./components/QuickLinkComp";
import { BugIcon } from "../../assets/svgs";
import { Radio, UserRound } from "lucide-react";
import LineChart from "./components/LineChart";
import TrafficCard from "./components/TrafficCard";
import ReportsChart from "./components/ReportChart";
import TrafficChart from "./components/TrafficChart";
import MarketingChart from "./components/MarketingChart";

const DashboardHome = () => {
  return (
    <div className="bg-white h-screen p-4 flex">
      <div className="grid grid-cols-8 gap-4 flex-grow">
        {/* Left Section (Scrollable) */}
        <div className="col-span-8 lg:col-span-6 h-[90vh] overflow-y-auto">
          <div className="flex gap-4 overflow-x-auto p-2">
            <div className="flex flex-grow justify-start min-w-full md:min-w-0">
              <div className="flex flex-row overflow-x-scroll 2xl:grid 2xl:auto-rows-fr 2xl:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 flex-grow">
                <StatsCard
                  bgColor="#E3F5FF"
                  title="Requests"
                  value="7,265"
                  percentage={11.02}
                />
                <StatsCard
                  bgColor="#E5ECF6"
                  title="KYC"
                  value="3,671"
                  percentage={-0.03}
                />
                <StatsCard
                  bgColor="#E3F5FF"
                  title="Tasks"
                  value="156"
                  percentage={15.03}
                />
                <StatsCard
                  bgColor="#E5ECF6"
                  title="Customers"
                  value="2,318"
                  percentage={-6.08}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-8">
              <LineChart />
            </div>
            <div className="col-span-12 md:col-span-4">
              <TrafficCard />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 mt-5 mb-2 mr-1">
            <div className="col-span-12 md:col-span-6 flex flex-col h-full min-h-[300px]">
              <ReportsChart className="h-full w-full" />
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col h-full min-h-[300px]">
              <TrafficChart className="h-full w-full" />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 mt-5 mb-2 mr-1">
            <div className="col-span-12 flex flex-col h-full min-h-[300px]">
              <MarketingChart className="h-full w-full" />
            </div>
          </div>
        </div>

        {/* Notification Section (Fixed) */}
        <div className="col-span-8 lg:col-span-2 bg-[#FFF8F8] p-4 rounded-xl h-[90vh] overflow-y-auto">
          <p className="mb-5 text-left">Notifications</p>
          <div className="flex flex-col gap-5 mb-5">
            <QuickLinkComp
              icon={BugIcon}
              title="You fixed a bug."
              subtitle="just now"
            />
            <QuickLinkComp
              icon={UserRound}
              title="New user registered."
              subtitle="59 minutes ago"
            />
            <QuickLinkComp
              icon={BugIcon}
              title="You fixed a bug."
              subtitle="12 hours ago"
            />
            <QuickLinkComp
              icon={Radio}
              title="Andi Lane subscribed to you."
              subtitle="Today, 11:59 AM"
            />
          </div>
          <p className="my-5 text-left">Activities</p>
          <div className="flex flex-col gap-5">
            <QuickLinkComp title="Changed the style." subtitle="just now" />
            <QuickLinkComp
              title="Released a new version."
              subtitle="59 minutes ago"
            />
            <QuickLinkComp title="Submitted a bug." subtitle="12 hours ago" />
            <QuickLinkComp
              title="Modified A data in Page X."
              subtitle="Today, 11:59 AM"
            />
            <QuickLinkComp
              title="Deleted a page in Project X."
              subtitle="Today, 11:59 AM"
            />
          </div>
          <p className="my-5 text-left">Contacts</p>
          <div className="flex flex-col gap-5 pb-5">
            <QuickLinkComp title="Natali Craig" />
            <QuickLinkComp title="Drew Cano" />
            <QuickLinkComp title="Andi Lane" />
            <QuickLinkComp title="Koray Okumus" />
            <QuickLinkComp title="Kate Morrison" />
            <QuickLinkComp title="Melody Macy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
