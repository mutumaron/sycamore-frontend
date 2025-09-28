import Link from "next/link";
import React from "react";

import { Separator } from "../ui/separator";
import {
  Bike,
  Book,
  Cable,
  ChartCandlestick,
  Database,
  Home,
  MessageCircle,
  UserLock,
} from "lucide-react";

type NavProps = {
  onLinkClick: () => void;
};

const MobileNavlinks = ({ onLinkClick }: NavProps) => {
  return (
    <ul className="flex flex-col gap-3">
      <Separator />
      <li className="flex gap-5 items-center mt-5">
        <Home size={25} />
        <Link
          href={"/"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          Home
        </Link>
      </li>
      <Separator />
      <li className="flex gap-5 items-center ">
        <Book size={25} />
        <Link
          href={"/about"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          About
        </Link>
      </li>
      <Separator />
      <li className="flex gap-5 items-center ">
        <Bike size={25} />
        <Link
          href={"/sycamore-ride"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          Sycamore Ride
        </Link>
      </li>
      <Separator />
      <li className="flex gap-5 items-center ">
        <Cable size={25} />
        <Link
          href={"/sycamore-ride"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          Sycamore Power
        </Link>
      </li>
      <Separator />
      <li className="flex gap-5 items-center ">
        <Database size={25} />
        <Link
          href={"/sycamore-ride"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          Sycamore Data
        </Link>
      </li>
      <Separator />
      <li className="flex gap-5 items-center ">
        <ChartCandlestick size={25} />
        <Link
          href={"/sycamore-ride"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          Sycamore Finance
        </Link>
      </li>
      <Separator />
      <li className="flex gap-5 items-center ">
        <UserLock size={25} />
        <Link
          href={"/login"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          Login
        </Link>
      </li>
      <Separator />
      <li className="flex gap-5 items-center ">
        <MessageCircle size={25} />
        <Link
          href={"/contact"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          Contact
        </Link>
      </li>
      <Separator />
    </ul>
  );
};

export default MobileNavlinks;
