import React from "react";

export default function Hero() {
  return (
    <section className="max-w-[1640px] mx-auto px-8 py-4">
      <div className="max-h-[500px] relative">
        <div className="overlay rounded-xl absolute bg-black/40 h-full w-full max-h-[500px] px-4 text-3xl sm:text-5xl md:text-6xl lg:text:7xl font-bold text-gray-200 flex flex-col justify-center">
          <h1>
            The <span className="text-orange-600">Best</span>
          </h1>
          <h1>
            <span className="text-orange-600">Foods</span> Delivered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover rounded-xl"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ></img>
      </div>
    </section>
  );
}
