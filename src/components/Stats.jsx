import React from "react";

export default function Stats() {
  return (
    <section className="bg-black py-16 px-4">
      <h1 className="text-blue-600 text-center mb-12 text-3xl font-bold">
        Your Career Launchpad
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">

        <div className="border-2 p-6 rounded-lg text-green-400 min-w-[200px] max-w-full">
          <h1 className="text-3xl font-bold">₹54 LPA</h1>
          <p className="text-gray-400">Highest Package</p>
        </div>

        <div className="border-2 p-6 rounded-lg text-green-400 min-w-[200px] max-w-full">
          <h1 className="text-3xl font-bold">₹6.74 LPA</h1>
          <p className="text-gray-400">Average Package</p>
        </div>

        <div className="border-2 p-6 rounded-lg text-green-400 min-w-[200px] max-w-full">
          <h1 className="text-3xl font-bold">100%</h1>
          <p className="text-gray-400">Placement Assistance</p>
        </div>

      </div>

      <p className="text-gray-500 mt-6 text-center">
        Trusted by 250+ Recruiters
      </p>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
        <img
          className="h-12 object-contain"
          src="https://logos-world.net/wp-content/uploads/2021/08/Deloitte-Emblem.png"
          alt="Deloitte"
        />
        <img
          className="h-12 object-contain"
          src="https://static.vecteezy.com/system/resources/thumbnails/019/136/319/small/amazon-logo-amazon-icon-free-free-vector.jpg"
          alt="Amazon"
        />

        <img
          className="h-12 object-contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTydQpsrBk6gItfOu27vRnE6seIa-NdSxaNig&s"
          alt="infosys"
        />

         <img
          className="h-12 object-contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbb6YHjjPZxbuf4hFnFpUv11sh4cH6Fi9tQ&s"
          alt="accenture"
        />

        <img
          className="h-12 object-contain"
          src="https://1000logos.net/wp-content/uploads/2023/03/HCL-logo.jpg"
          alt="HCL"
        />
      </div>
    </section>
  );
}
