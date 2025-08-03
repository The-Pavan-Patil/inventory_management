"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapesed } from "@/State";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const isDarkMode = useAppSelector(
    (state) => state.global.isDarkMode
  )
  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode))
  }
  const isSidebarCollapesed = useAppSelector(
    (state) => state.global.isSidebarCollapesed
  );
  const dispatch = useAppDispatch();

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapesed(!isSidebarCollapesed));
  };
  return (
    <div className="light flex justify-between items-center w-full mb-7">
      {/* left side of the navbar */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Search for the categories.."
            className="pl-10 pr-4 py-2 w-50 md:w-80 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 "
          />
          <div className="absolute inset-y-0 left-0  pl-3 flex pointer-events-none items-center">
            <Bell className="text-gray-500 size={15}" />
          </div>
        </div>
      </div>

      {/* Right side of navbar */}

      <div className="flex justify-center items-center gap-5">
        <div className="hidden md:flex  justify-center items-center gap-5">
          <div>
            <button onClick={toggleDarkMode} className="">
              { isDarkMode ? (<Sun className="cursor-pointer text-gray-500 size={24}"/>) : (<Moon className="cursor-pointer text-gray-500 size={24}"/>) }
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500 size={24}" />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-2 text-xs font-semibold leading-none bg-red-400 rounded-full">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-2" />
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9"> image </div>
            <span className="font-semibold ">name</span>
          </div>
        </div>
        <Link href="/Settings">
          <Settings className="cursor-pointer text-gray-500 size={24}" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
