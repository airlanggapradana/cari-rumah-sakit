"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Hospital } from "@/types/APITypes";
import { useState, useEffect } from "react";
import { Bed, MapPin, PhoneCall } from "lucide-react";

const CustomCard = ({
  title,
  address,
  phone,
  available_beds,
  tipe_kamar,
  info,
}: {
  title?: string;
  address?: string;
  phone?: string;
  available_beds?: number;
  tipe_kamar?: string;
  info?: string;
}) => {
  return (
    <>
      <Card className="bg-gray-100 border-2 border-gray-300 shadow-md">
        <CardHeader>
          <CardTitle className="leading-relaxed">{title}</CardTitle>
          <CardDescription className="flex items-center gap-2">
            <MapPin size={16} />
            {address}
          </CardDescription>
          <CardDescription className="flex items-center gap-2">
            <PhoneCall size={16} />
            {phone}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-start gap-4">
          <p className="font-normal text-sm">
            <span className="flex items-center gap-2">
              <Bed size={16} />
              Available Room: {available_beds}
            </span>
          </p>

          <p className="font-normal text-sm">
            <span className="flex items-center gap-2">
              <Bed size={16} />
              Tipe Kamar: {tipe_kamar}
            </span>
          </p>
        </CardContent>
        <CardFooter>
          <p className="font-normal text-sm">{info}</p>
        </CardFooter>
      </Card>
    </>
  );
};

const HospitalCardList = ({
  provinsi,
  kota,
}: {
  provinsi: string;
  kota: string;
}) => {
  const [hospital, setHospital] = useState<Hospital[]>([]);

  useEffect(() => {
    const getHospitals = async (provinsi: string, kota: string) => {
      const res = await fetch(
        `https://rs-bed-covid-api.vercel.app/api/get-hospitals?provinceid=${provinsi}&cityid=${kota}&type=2`
      )
        .then((response) => response.json())
        .then((data) => data.hospitals)
        .catch((error) => {
          console.log(error);
        });

      setHospital(res);
    };

    if (provinsi && kota) {
      getHospitals(provinsi, kota);
    }
  }, [provinsi, kota]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        {hospital.map((hospital) => (
          <CustomCard
            key={hospital.id}
            title={hospital.name}
            address={hospital.address}
            phone={hospital.phone}
            available_beds={hospital.available_beds[0].available}
            tipe_kamar={hospital.available_beds[0].bed_class}
            info={hospital.available_beds[0].info}
          />
        ))}
      </div>
    </>
  );
};

export default HospitalCardList;
