import React from "react";
import campus1 from "../assets/campus1.png";
import fstar from "../assets/fstar.png";
import boy from "../assets/boy.png";

export default function Scholarship() {
  return (
    <section className="relative text-white py-16 px-6 overflow-hidden">

      <img
        src={campus1}
        alt="Campus Background"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />

      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      <div className="relative grid grid-cols-1 md:grid-cols-[70%_30%] gap-8 max-w-7xl mx-auto">

        <div>
          <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-blue-500">
            Merit Rewarded:
            <span className="flex items-center gap-3 text-white">
              Meet
              <img src={fstar} alt="F-STAR" className="h-10 md:h-12 w-auto" />
            </span>
          </h2>

          <p className="mt-3 max-w-xl">
            Financial assistance designed to remove barriers for talented students.
          </p>

          <div className="max-w-3xl mt-8">

            <div className="flex justify-between bg-blue-900 px-4 py-3 rounded-lg font-bold">
              <p>Scholarship Slab</p>
              <p>Eligibility Criteria</p>
            </div>

            <div className="flex justify-between bg-white text-black px-4 py-3 mt-3 rounded">
              <p className="font-bold">100% Waiver</p>
              <p>Score ≥ 90%</p>
            </div>

            <div className="flex justify-between bg-white text-black px-4 py-3 mt-3 rounded">
              <p className="font-bold">50% Waiver</p>
              <p>Score 80% – 89.9%</p>
            </div>

            <div className="flex justify-between bg-white text-black px-4 py-3 mt-3 rounded">
              <p className="font-bold">25% Waiver</p>
              <p>Score 70% – 79.9%</p>
            </div>

            <div className="mt-6 text-sm text-gray-300">
              <p>Eligibility: 10+2 with PCM (Minimum 45%, 40% reserved)</p>
              <p>Accepts JEE Main, CUET</p>
            </div>

          </div>
        </div>

        <div className="hidden md:flex items-end  h-full justify-end">
          <img
            src={boy}
            alt="Student"
            className="w-full  h-full max-w-[280px] md:max-w-[320px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}
