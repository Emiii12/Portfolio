"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSidebar } from "@/context/useSidebar";
import { CommonTexts } from "@/components/ui/Common/CommonTexts";
import { SelectLanguageSideBar } from "./SelectLaguage";
import { SidebarItems } from "./NavItems";

const Sidebar = () => {
  const { isSideBarActive, toggleSidebar } = useSidebar();

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isSideBarActive ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 h-full w-full bg-coalBlue shadow-md z-[1001] p-7 space-y-7"
    >
      <div className="flex justify-between items-center">
        <div className="flex">
          <CommonTexts className="text-lg"/>
        </div>
        <button
          className="p-2 rounded-full hover:bg-silverGray hover:bg-opacity-20 transition-colors duration-150"
          onClick={toggleSidebar}
        >
          <XMarkIcon className="text-lightSeaGreen w-6 h-6" />
        </button>
      </div>
      <SidebarItems />
      <div>
        <SelectLanguageSideBar />
      </div>
    </motion.div>
  );
};

export default Sidebar;
