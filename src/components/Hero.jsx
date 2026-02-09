import React from "react";
import HeroImg from "../assets/HeroImg.png";
import grp from "../assets/grp.png";


export default function Hero() {
  return (
    <section className="relative min-h-screen text-white px-4 py-20 flex items-center">

      <img
        src={HeroImg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="max-w-6xl mx-auto w-full">

        <nav className="mb-16">
          <img src={grp} alt="Group"></img>
          <p className="text-sm text-gray-300">
            Learn • Assimilate • Transcend
          </p>
        </nav>

        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Engineer the Future at India’s
            <span className="block text-blue-400">
              First AI-Enabled University
            </span>
          </h1>

          <p className="mt-6 text-gray-200">
            B.TECH programs co-designed by IBM, L&T, Xebia & EC-Council.
          </p>
          <p className="mt-2 text-gray-200">
            Real Projects, real certificates, real jobs
          </p>


          <div className="mt-6 flex flex-wrap gap-4 backdrop-blur border border-green-900 rounded-full p-3">
            <span>Highest <span className="text-green-400">₹54 LPA</span></span>
            <span>Average <span className="text-green-400">₹6.74 LPA</span></span>
            <span>Recruiters <span className="text-green-400">250+</span></span>
            <span>Alumni <span className="text-green-400">15k+</span></span>
          </div>

          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-blue-500 px-6 py-3 rounded-full">
              Apply for B.Tech 2025
            </button>
            <div className="text-sm">
              <p>Admissions Open for 2025–2026</p>
              <p>Scholarships available (F-STAR)</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
