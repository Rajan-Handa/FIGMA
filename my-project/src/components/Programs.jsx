import React from "react";
import campus2 from "../assets/campus2.jpg";

export default function Programs() {
  return (
    <section className="relative text-white py-16 px-4 overflow-hidden">

      <img
        src={campus2}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10" />

      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      <h2 className="text-center text-2xl font-bold">
        Choose a B.Tech employers recognize
      </h2>
      <p className="text-center mt-2 text-gray-300">
        Specialisations taught with live projects and partner certifications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mt-10">

        <div>
          <h3 className="font-semibold mb-4 text-green-400">| UG Programs</h3>
          <div className="space-y-3">
            <div className="bg-white/90 text-black font-bold py-2 px-3 rounded">
              B.Tech Computer Science
            </div>
            <div className="bg-white/90 text-black font-bold py-2 px-3 rounded">
              Artificial Intelligence & Machine Learning
            </div>
            <div className="bg-white/90 text-black font-bold py-2 px-3 rounded">
              Civil Engineering
            </div>
            <div className="bg-white/90 text-black font-bold py-2 px-3 rounded">
              BCA (Bachelor of Computer Application)
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-green-400">| PG Programs</h3>
          <div className="space-y-3">
            <div className="bg-white/90 text-black font-bold py-2 px-3 rounded">
              M.Tech Computer Science & Engineering
            </div>
            <div className="bg-white/90 text-black font-bold py-2 px-3 rounded">
              Artificial Intelligence & Machine Learning
            </div>
            <div className="bg-white/90 text-black font-bold py-2 px-3 rounded">
              MCA (Master of Computer Application)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
