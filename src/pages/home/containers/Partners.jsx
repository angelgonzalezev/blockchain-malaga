import React from "react";
import Demium from "../../../assets/demium.png";
import Polo from "../../../assets/polo.png";
import Scaleway from "../../../assets/scaleway.png";
import TB from "../../../assets/territoriobtc.png";
import BIC from "../../../assets/beincrypto.png";
import BlockchainRadio from "../../../assets/blockchainradio.jpg";
import Cointelegraph from "../../../assets/cointelegraph.png";

const Partners = () => {
  return (
    <div className="mx-auto px-4 flex flex-col items-center">
      <div className="flex flex-col items-center max-w-[1240px] py-12">
        <h1 className="text-3xl font-bold py-4 text-center">
          # Porque la unión hace la fuerza
        </h1>
        <p className="py-4 text-center text-xl">
          Desde <span className="font-bold">Blockchain Málaga</span> queremos
          incentivar el crecimiento del ecosistema Blockchain, además de
          fomentar la tecnología y el emprendimiento.
        </p>
        <p className="py-4 text-center text-xl">
          Esta comunidad nace con el objetivo de ser el primer punto de
          encuentro tecnológico y de formación para todas aquellas personas que
          deseen adentrarse en tecnologías{" "}
          <span className="font-bold italic">
            Blockchain, Web3, NFTs y Metaverso
          </span>
          .
        </p>
        <p className="py-4 text-center text-xl">
          Aquí podrás encontrar eventos de tecnología, startups, conexiones y
          mucho más.
        </p>
        <p className="font-bold py-4">Desde Málaga con ❤️</p>
      </div>
      <div className="flex flex-col items-center py-12">
        <h2 className="text-3xl font-bold py-6">Colaboradores 👋</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-7 items-center ">
          <img
            className="w-[150px] object-contain hover:scale-150 duration-300 px-2"
            src={Demium}
            alt="demium"
          />
          <img
            className="w-[150px] object-contain hover:scale-150 duration-300 px-2"
            src={Polo}
            alt="polo"
          />
          <img
            className="w-[150px] object-contain hover:scale-150 duration-300 px-2"
            src={Scaleway}
            alt="scaleway"
          />
          <img
            className="w-[150px] object-contain hover:scale-150 duration-300 px-2"
            src={TB}
            alt="territorio bitcoin"
          />
          <img
            className="w-[150px] object-contain hover:scale-150 duration-300 px-2"
            src={BIC}
            alt="be in crypto"
          />
          <img
            className="w-[150px] object-contain hover:scale-150 duration-300 px-2"
            src={BlockchainRadio}
            alt="blockchain radio"
          />
          <img
            className="w-[150px] object-contain hover:scale-150 duration-300 px-2"
            src={Cointelegraph}
            alt="cointelegraph"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
