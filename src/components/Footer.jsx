import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="w-full relative bottom-0">
      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fb923c"
            fill-opacity="1000"
            d="M0,224L60,202.7C120,181,240,139,360,122.7C480,107,600,117,720,138.7C840,160,960,192,1080,213.3C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-orange-400">
        <div className="max-w-[1640px] mx-auto pb-12">
          <div className="footer-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            <div className="flex flex-col md:justify-center gap-6 p-4">
              <h3 className="text-4xl">
                Best<span className="font-bold">Eats</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sollicitudin fringilla vehicula. Quisque luctus lacus nec
                consectetur pellentesque. Proin malesuada tristique mauris ut
                mollis. Donec sollicitudin fringilla vehicula.
              </p>
              <div className="flex gap-4">
                <FaFacebook
                  size={24}
                  className="cursor-pointer hover:scale-[1.18] duration-300"
                />
                <AiFillInstagram
                  size={25}
                  className="cursor-pointer hover:scale-[1.18] duration-300"
                />
                <AiOutlineTwitter
                  size={25}
                  className="cursor-pointer hover:scale-[1.18] duration-300"
                />
                <AiOutlineGithub
                  size={25}
                  className="cursor-pointer hover:scale-[1.18] duration-300"
                />
              </div>
            </div>
            <div className="p-4 flex md:justify-center">
              <ul className="flex flex-col gap-2 font-semibold">
                <li>About Us</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="p-4 flex flex-col md:justify-center gap-6">
              <h3 className="font-bold text-xl">Contact Us</h3>
              <span className="flex gap-4 items-center">
                <MdEmail size={25} /> info@gmail.com
              </span>
              <span className="flex gap-4 items-center">
                <FaPhoneAlt size={25} /> 3389799455
              </span>
              <span className="flex gap-4 items-center">
                <GiPositionMarker size={25} /> 6034 Richmond, Alexandria, VA,
                22303
              </span>
            </div>

            <div className="p-4 flex flex-col md:justify-center gap-6">
              <h3 className="font-bold text-xl">Sign up for updates</h3>
              <input
                className="py-2 px-4 font-semibold bg-gray-100 outline-0 border-white"
                type="text"
                placeholder="E-mail*"
              ></input>
              <button className="font-semibold text-lg rounded-none py-1 px-4 duration-300 bg-black text-orange-500 hover:scale-[0.97]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
