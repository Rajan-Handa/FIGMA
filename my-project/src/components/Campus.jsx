import React from "react";
import campus5 from "../assets/campus5.jpg";
import campus2 from "../assets/campus2.jpg";
import campus3 from "../assets/campus3.jpg";
import campus4 from "../assets/campus4.png";

export default function Campus() {
  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-center text-2xl font-bold text-blue-700">
        A Campus Built for Innovation
      </h2>
      <h3 className="text-center mt-2 text-gray-600">
        State-of-art infrastructure designed to foster creativity.
      </h3>

      <div className="max-w-5xl mx-auto mt-8 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full sm:w-[80%]">

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <img src={campus4} className="w-full h-full object-cover" />

            <div className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium">
              Smart Campus & <br /> Green Spaces
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <img src={campus2} className="w-full h-full object-cover" />

            <div className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold
">
              Makers Spaces & <br /> Prototyping
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <img src={campus3} className="w-full h-full object-cover" />

            <div className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold
">
              Happiness Centre & <br /> Wellbeing
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <img src={campus5} className="w-full h-full object-cover" />

            <div className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold
">
              Language Labs & <br /> Global Exchange
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
