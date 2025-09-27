import React from "react";
import { Dot } from "lucide-react";

interface OperationCardProps {
  color: string;
  title: string;
}

const OperationCard = ({ color, title }: OperationCardProps) => {
  return (
    <div className="flex items-center px-2 border py-1 rounded-md max-w-fit">
      <Dot className={`${color}`} size={35} />
      <h1 className="font-bold text-sm">{title}</h1>
    </div>
  );
};

export default OperationCard;
