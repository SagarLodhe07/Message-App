import React from "react";
import { useState } from "react";
import { BiMenu, BiMessage } from "react-icons/bi";
import { VscTools } from "react-icons/vsc";

const Sidebar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div
      className={`h-full ${
        menu ? "w-[250px]" : "w-[50px]"
      } bg-slate-900 transition-all ease-out relative `}
    >
      <div className="flex absolute flex-col items-center gap-5 p-2">
        <BiMenu
          fill="white"
          className="size-5"
          onClick={() => setMenu(!menu)}
        />

        <BiMessage fill="white" className="size-5" />

        {/* For Setting And Profile */}
        <div className=" flex absolute flex-col items-center gap-y-1 top-96 left-2">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          className="rounded-full size-6"
          alt="user_Profile"
        />
        <VscTools fill="white" className="size-5 hover:bg-red-600 cursor-pointer" />
        <p className={`${menu?"block":"hidden"}`}>Setting</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
