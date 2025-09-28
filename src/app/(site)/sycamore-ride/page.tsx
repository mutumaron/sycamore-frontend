import Hero from "@/components/Ride/Hero";
import RideCard from "@/components/Ride/RideCard";
import RideTabs from "@/components/Ride/RideTabs";
import { BriefcaseBusiness, Handshake, UserPen } from "lucide-react";
import React from "react";

const RidePage = () => {
  return (
    <div className="space-y-16 lg:px-36 px-12">
      <Hero />
      <section className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10">
        <RideCard
          title="Self Ownership"
          icon={<Handshake />}
          description="   With Sycamore Ownership, riders can choose from 18 electric bikes and
          own them through an easy daily payment plan. By depositing KES 500 per
          day—where KES 300 goes into your savings account and KES 200 to
          Sycamore—you steadily work toward full ownership while enjoying
          reliable weekly maintenance support."
        />
        <RideCard
          title="Bussines Rental"
          icon={<BriefcaseBusiness />}
          description="Our Business Rental package is designed for delivery and logistics companies seeking efficiency and reliability. At just KES 60 per kilometer, businesses get access to fully serviced electric bikes with fuel and maintenance included, ensuring smooth operations without hidden costs."
        />
        <RideCard
          title="Individual Rental"
          icon={<UserPen />}
          description="For personal riders, our Individual Rental option offers flexibility and convenience. With a flat fee of KES 500 per day, you can enjoy unlimited distance on a fully maintained electric bike, perfect for daily errands, commuting, or exploring the city."
        />
      </section>
      <RideTabs />
    </div>
  );
};

export default RidePage;
