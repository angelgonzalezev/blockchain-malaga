import React from "react";
import Logo from "../../../assets/horizontal-logo.png";

const Footer = () => {
  return (
    <div className=" max-w-[1240px] mx-auto flex flex-col items-center py-12 md:flex-row md: justify-between">
      <div className="w-[300px] flex flex-col items-center text-center">
        <img className="w-full" src={Logo} alt="logo" />
        <p className="py-2">Comunidad Web3, Blockchain & Metaverso de Málaga</p>
      </div>
      <p className="p-2">Todos los derechos reservados.</p>
    </div>
  );
};

export default Footer;
