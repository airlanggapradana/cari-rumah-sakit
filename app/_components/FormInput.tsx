"use client";
import { Province, City } from "@/types/APITypes";
import React from "react";
import { useState, useEffect } from "react";
import HospitalCardList from "./HospitalCardList";

const FormInput = () => {
  const [provinsi, setProvinsi] = useState<Province[]>([]);
  const [kota, setKota] = useState<City[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const getProvinces = async () => {
    const req = await fetch(
      "https://rs-bed-covid-api.vercel.app/api/get-provinces"
    )
      .then((res) => res.json())
      .then((data) => data.provinces)
      .catch((err) => {
        console.log(err);
      });

    setProvinsi(req);
  };

  const getProvinceCities = async (id: string) => {
    const req = await fetch(
      `https://rs-bed-covid-api.vercel.app/api/get-cities?provinceid=${id}`
    )
      .then((res) => res.json())
      .then((data) => data.cities)
      .catch((err) => {
        console.log(err);
      });

    setKota(req);
  };

  useEffect(() => {
    getProvinces();
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      getProvinceCities(selectedProvince);
    }
  }, [selectedProvince]);

  return (
    <>
      <div className="w-full flex flex-col items-start gap-3">
        <label htmlFor="provinsi" className="font-medium text-xl">
          Pilih Provinsi
        </label>
        <select
          name="provinsi"
          id="provinsi"
          className="w-full p-3 rounded bg-gray-100 outline-none border-2 border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
        >
          <option value="" disabled>
            Pilih Provinsi
          </option>

          {provinsi.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <label htmlFor="cities" className="font-medium text-xl">
          Pilih Kota / Kabupaten
        </label>
        <select
          name="cities"
          id="cities"
          className="w-full p-3 rounded bg-gray-100 outline-none border-2 border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="" disabled>
            Pilih Kota / Kabupaten
          </option>

          {kota.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <HospitalCardList provinsi={selectedProvince} kota={selectedCity} />
    </>
  );
};

export default FormInput;
