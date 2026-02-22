import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import OwnershipTab from "./OwnershipTab";
import BusinessTab from "./BusinessTab";
import IndividualTab from "./IndividualTab";

const RideTabs = () => {
  return (
    <section className="flex flex-col items-center gap-5">
      <OwnershipTab />
    </section>
  );
};

export default RideTabs;
