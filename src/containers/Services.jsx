import React from "react";
import MobileMockup from "../assets/mobilemockup.png";

const Services = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold py-4 text-center">
        Portal de empleos 💻
      </h1>
      <div className="md:grid md:grid-cols-2 items-center">
        <div className="flex flex-col text-center items-center">
          <h2 className="text-3xl font-bold py-4 text-gray-800">
            Para las empresas y organizaciones 🏢
          </h2>
          <p className="py-2 text-center text-xl">
            Encuentra el mejor talento digital y tecnológico especicializado en
            Blockchain, Web3 y Metaverso.
          </p>
          <p className="py-2 text-center text-xl">
            Publica ofertas de empleo ante cientos de profesionales del sector
            de una forma rápida y sencilla.
          </p>
          <h2 className="text-3xl font-bold py-4 text-gray-800">
            Para los usuarios 🤸‍♂️
          </h2>
          <p className="py-2 text-center text-xl">
            Accede a las mejores oportunidades de trabajo del ecosistema
            Blockchain en Málaga.
          </p>
          <button className="w-[200px] bg-mainColor py-4 px-6 font-semibold text-white rounded-md my-4 hover:scale-105 duration-300">
            Ver empleos
          </button>
        </div>
        <img className="object-cover" src={MobileMockup} alt="mockup" />
      </div>
    </div>
  );
};

export default Services;
