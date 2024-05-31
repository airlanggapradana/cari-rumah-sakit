"use client";
import { Province, City } from "@/types/APITypes";
import React from "react";
import { useState, useEffect } from "react";

const FormInput = () => {
  const [provinsi, setProvinsi] = useState<Province[]>([]);
  const [kota, setKota] = useState<City[]>([]);

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

  useEffect(() => {
    setTimeout(getProvinces, 2000);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-start gap-3">
        <label htmlFor="provinsi" className="font-medium text-xl">
          Pilih Provinsi
        </label>
        <select
          name="provinsi"
          id="provinsi"
          className="w-full p-3 rounded bg-gray-100 outline-none border-2 border-gray-300"
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
      </div>
    </>
  );
};

export default FormInput;
