import Link from "next/link";
import React from "react";

import { Separator } from "../ui/separator";
import {
  Bike,
  Book,
  Cable,
  ChartCandlestick,
  Database,
  DollarSign,
  GraduationCap,
  Handshake,
  Home,
  Landmark,
  MessageCircle,
  UserLock,
  Wrench,
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
          href={"/sycamore-riders"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          Sycamore Ride
        </Link>
      </li>
      <Separator />
      <li className="flex gap-5 items-center ">
        <Wrench size={25} />
        <Link
          href={"/sycamore-mechanics"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          Sycamore Mechanics
        </Link>
      </li>
      <Separator />
      <li className="flex gap-5 items-center ">
        <Handshake size={25} />
        <Link
          href={"/sycamore-dealership"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          Sycamore Dealership
        </Link>
      </li>
      <Separator />
      <li className="flex gap-5 items-center ">
        <Landmark size={25} />
        <Link
          href={"/sycamore-saccos"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          Sycamore Saccos
        </Link>
      </li>
      <Separator />
      <li className="flex gap-5 items-center ">
        <GraduationCap size={25} />
        <Link
          href={"/sycamore-careers"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          Sycamore Careers
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
