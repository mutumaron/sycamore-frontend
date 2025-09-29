import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Bike,
  BookType,
  BrainCircuit,
  ChartCandlestick,
  CodeXml,
  DatabaseZap,
  EvCharger,
  TabletSmartphone,
} from "lucide-react";

const Features = () => {
  return (
    <section className="flex flex-col gap-10 lg:py-20">
      <h1 className="font-bold text-2xl">WHAT WE OFFER</h1>
      <div className="grid gap-5 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>
              <EvCharger />
            </CardTitle>
            <CardDescription>Sycamore Power</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Sycamore Power is dedicated to building a sustainable future by
              harnessing clean energy solutions that fuel both mobility and
              communities. From renewable energy generation to smart charging
              infrastructure, we deliver reliable, eco-conscious power that
              supports electric mobility and beyond. Our mission is to make
              green energy accessible, scalable, and central to everyday life.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Bike />
            </CardTitle>
            <CardDescription>Sycamore Ride</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              At Sycamore Ride, we are redefining urban mobility through
              innovative electric bikes designed for efficiency, reliability,
              and sustainability. Our e-bikes provide clean, affordable
              transport options that reduce carbon emissions while offering
              riders a modern, convenient way to move through cities. Whether
              for personal use, delivery services, or shared mobility, Sycamore
              Ride ensures every journey is eco-friendly and empowering.
            </p>
          </CardContent>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>
              <ChartCandlestick />
            </CardTitle>
            <CardDescription>Sycamore Finance</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Sycamore Finance makes e-mobility accessible through flexible
              financial solutions that meet diverse customer needs. From
              affordable loans and rental options to direct sales, we empower
              individuals and businesses to embrace electric mobility without
              financial barriers. Our tailored financing plans, supported by
              intelligent risk assessment, ensure sustainable ownership and
              long-term value for every customer.
            </p>
          </CardContent>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>
              <BrainCircuit />
            </CardTitle>
            <CardDescription>Sycamore Data</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              At Sycamore Data, we unlock the power of information with advanced
              AI-driven analytics tailored for the e-mobility ecosystem. By
              transforming raw data from vehicles, users, and energy systems
              into actionable insights, we help optimize operations, predict
              trends, and drive smarter decisions. Our solutions empower
              businesses, governments, and individuals to embrace data-led
              growth with confidence.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Features;
