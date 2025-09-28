import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { UserPen } from "lucide-react";

type RideCardProps = {
  title: string;
  icon?: ReactNode;
  description: string;
};

const RideCard = ({ title, icon, description }: RideCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          {icon && <div>{icon}</div>}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default RideCard;
