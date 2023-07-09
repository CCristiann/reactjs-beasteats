import React from "react";

export default function Cards() {
  return (
    <section className="max-w-[1640px] mx-auto px-8 p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="overlay relative rounded-xl">
        <div className="absolute p-4 w-full h-full bg-black/50 rounded-xl text-white hover:bg-black/20 duration-500">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="absolute bottom-6 mx-2 bg-white text-black font-semibold border-0">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[190px] md:max-h-[250px] md:min-h-[250px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
        ></img>
      </div>

      <div className="overlay relative rounded-xl">
        <div className="absolute p-4 w-full h-full bg-black/50 rounded-xl text-white hover:bg-black/20 duration-500">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Through 8/26</p>
          <button className="absolute bottom-6 mx-2 bg-white text-black font-semibold border-0">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[190px] md:max-h-[250px] md:min-h-[250px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
        ></img>
      </div>

      <div className="overlay relative rounded-xl">
        <div className="absolute p-4 w-full h-full bg-black/60 rounded-xl text-white hover:bg-black/20 duration-500">
          <p className="font-bold text-2xl px-2 pt-4">
            We Deliver Desserts Too
          </p>
          <p className="px-2">Through 8/26</p>
          <button className="absolute bottom-6 mx-2 bg-white text-black font-semibold border-0">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[190px] md:max-h-[250px] md:min-h-[250px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        ></img>
      </div>
    </section>
  );
}
