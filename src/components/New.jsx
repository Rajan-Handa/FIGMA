import React from "react";
import star from "../assets/star.png";
import design from "../assets/design.png";
import Lab from "../assets/Lab.png";
import carrer from "../assets/carrer.png";

export default function New() {
  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-center text-2xl font-bold text-blue-600">
        Don’t just study engineering. Experience it.
      </h2>
      <p className="text-center mt-2 text-gray-600">
        We rewrite education by embedding AI across the curriculum and labs.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10">

       
        <div className="bg-gradient-to-b from-blue-700 to-blue-900 p-6 rounded-xl text-white">
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-lg">AI-Driven</h2>
            <img src={star} alt="AI" className="h-8 w-8" />
          </div>
          <p className="mt-3 text-sm">
            Adaptive LMS, AI Tutors, and personalized learning paths tailored to your pace.
          </p>
        </div>

    
        <div className="bg-gradient-to-b from-blue-700 to-blue-900 p-6 rounded-xl text-white">
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-lg">Industry Co-Designed</h2>
            <img src={design} alt="Industry" className="h-8 w-8" />
          </div>
          <p className="mt-3 text-sm">
            Modules built with IBM, L&T, and Xebia ensuring market relevance.
          </p>
        </div>

       
        <div className="bg-gradient-to-b from-blue-700 to-blue-900 p-6 rounded-xl text-white">
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-lg">Innovation Labs</h2>
            <img src={Lab} alt="Labs" className="h-8 w-8" />
          </div>
          <p className="mt-3 text-sm">
            Centers of Excellence in Robotics, IoT, AR/VR, and Digital Manufacturing.
          </p>
        </div>

      
        <div className="bg-gradient-to-b from-blue-700 to-blue-900 p-6 rounded-xl text-white">
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-lg">Career Engineering</h2>
            <img src={carrer} alt="Career" className="h-8 w-8" />
          </div>
          <p className="mt-3 text-sm">
            AI-powered CV Builder, job-matching, and employer readiness training.
          </p>
        </div>

      </div>
    </section>
  );
}
