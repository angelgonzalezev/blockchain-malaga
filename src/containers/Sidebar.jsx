import React, { useState } from "react";
import Logo from "../assets/horizontal-logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white w-full text-black">
      <div className="max-w-[1240px] mx-auto flex justify-between px-8 items-center h-24">
        <div className="w-[200px] sm:w-[250px]">
          <img src={Logo} alt="logo" className="w-full" />
        </div>
        <ul className="hidden md:flex items-center">
          <li className="px-4 py-2 font-semibold text-mainColor hover:border-b-2 hover:border-mainColor hover:text-black">
            Inicio
          </li>
          <li className="px-4 py-2 font-semibold text-mainColor hover:border-b-2 hover:border-mainColor hover:text-black">
            Eventos
          </li>
          <li className="px-4 py-2 font-semibold text-mainColor hover:border-b-2 hover:border-mainColor hover:text-black">
            Directorio
          </li>
          <li className="px-4 py-2 font-semibold text-mainColor hover:border-b-2 hover:border-mainColor hover:text-black">
            Aprender
          </li>
          <li className="px-4 py-2 font-semibold text-mainColor hover:border-b-2 hover:border-mainColor hover:text-black">
            Contacto
          </li>
        </ul>
        <div className="md:hidden">
          {showMenu ? (
            <AiOutlineClose size={20} onClick={() => setShowMenu(false)} />
          ) : (
            <AiOutlineMenu size={20} onClick={() => setShowMenu(true)} />
          )}
        </div>
      </div>
      {showMenu && (
        <div className="w-full bg-white ease-in-out duration-300 pb-2">
          <ul className="flex flex-col w-full bg-mainColor-500">
            <li className="px-4 py-2 font-semibold text-mainColor hover:border-b-2 hover:border-mainColor hover:text-black text-xl">
              Inicio
            </li>
            <li className="px-4 py-2 font-semibold text-mainColor hover:border-b-2 hover:border-mainColor hover:text-black text-xl">
              Eventos
            </li>
            <li className="px-4 py-2 font-semibold text-mainColor hover:border-b-2 hover:border-mainColor hover:text-black text-xl">
              Directorio
            </li>
            <li className="px-4 py-2 font-semibold text-mainColor hover:border-b-2 hover:border-mainColor hover:text-black text-xl">
              Aprender
            </li>
            <li className="px-4 py-2 font-semibold text-mainColor hover:border-b-2 hover:border-mainColor hover:text-black text-xl">
              Contacto
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
