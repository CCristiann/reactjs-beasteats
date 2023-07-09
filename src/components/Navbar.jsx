import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillHeart,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const listElementCss =
    "text-xl flex items-center px-2 py-4 hover:bg-slate-200 duration-300 rounded-xl";

  return (
    <nav className="shadow-md">
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
        <div className="navbar-left flex flex-row items-center gap-4">
          <div className="cursor-pointer">
            <AiOutlineMenu size={30} onClick={() => setNav(!nav)} />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl">
              Beast
              <span className="font-bold">Eats</span>
            </h1>
          </div>
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] font-semibold">
            <p className="bg-black text-white rounded-full p-2">Delivery</p>
            <p className="p-2">Pickup</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={20} />
          <input
            type="text"
            placeholder="Search food"
            className="bg-gray-200 rounded-full outline-0 tex-2xl p-2 w-[100%] font-semibold"
          ></input>
        </div>

        <div>
          <button
            type="button"
            id="cart"
            className="hidden md:flex gap-2 py-2 rounded-full bg-black text-white"
          >
            <BsFillCartFill size={20} /> Cart
          </button>
        </div>

        {/*Overlay*/}
        {nav ? (
          <div className="bg-black/80 fixed top-0 left-0 w-full h-screen z-10 duration-300"></div>
        ) : (
          ""
        )}

        {/*Aside menu*/}
        <aside
          className={
            nav
              ? "fixed top-0 left-0 z-10 bg-white w-[100vw] md:w-[300px] lg:[400px] h-screen duration-300"
              : "fixed top-0 left-[-100%] z-10 bg-white w-[300px] h-screen duration-300"
          }
        >
          <div className="aside-header flex justify-between items-center p-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl">
              Best
              <span className="font-bold">Eats</span>
            </h2>
            <AiOutlineClose
              size={30}
              className="cursor-pointer"
              onClick={() => setNav(!nav)}
            />
          </div>
          <nav>
            <ul className="text-gray-800 flex flex-col p-4 gap-4">
              <li className={listElementCss}>
                <TbTruckDelivery className="mr-4" />
                Orders
              </li>
              <li className={listElementCss}>
                <AiFillHeart className="mr-4" />
                Favorites
              </li>
              <li className={listElementCss}>
                <FaWallet className="mr-4" />
                Wallet
              </li>
              <li className={listElementCss}>
                <IoMdHelpCircle className="mr-4" />
                Help
              </li>
              <li className={listElementCss}>
                <AiFillTag className="mr-4" />
                Promotions
              </li>
              <li className={listElementCss}>
                <BsFillSaveFill className="mr-4" />
                Best Ones
              </li>
              <li className={listElementCss}>
                <FaUserFriends className="mr-4" />
                Invite Friends
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </nav>
  );
}
