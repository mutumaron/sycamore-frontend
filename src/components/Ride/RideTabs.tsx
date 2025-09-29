import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import OwnershipTab from "./OwnershipTab";
import BusinessTab from "./BusinessTab";
import IndividualTab from "./IndividualTab";

const RideTabs = () => {
  return (
    <Tabs defaultValue="ownership">
      <TabsList className="flex flex-wrap mb-12 md:mb-8 gap-3">
        <TabsTrigger value="ownership">Self Ownership</TabsTrigger>
        <TabsTrigger value="business">Business Rental</TabsTrigger>
        <TabsTrigger value="individual">Individual Rental</TabsTrigger>
      </TabsList>
      <TabsContent value="ownership">
        <OwnershipTab />
      </TabsContent>
      <TabsContent value="business">
        <BusinessTab />
      </TabsContent>
      <TabsContent value="individual">
        <IndividualTab />
      </TabsContent>
    </Tabs>
  );
};

export default RideTabs;
