import React from "react";
import HeroImage from "../assets/hero-image.png";
import People from "../assets/people.png";

const Hero = () => {
  return (
    <div className="w-full h-screen text-white items-center">
      <img
        src={HeroImage}
        alt="hero"
        className="absolute h-full w-full object-cover"
      />
      <div className="relative max-w-[1240px] px-8 lg:px-0 h-[100%] grid lg:grid-cols-2 mx-auto items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold py-2 md:text-4xl">Último evento</h1>
          <h2 className="text-xl py-2">
            Web3, NFT y Metaverso | Oportunidades y retos
          </h2>
          <iframe
            className="py-4 w-full min-h-[350px] max-w-[560px]"
            src="https://www.youtube.com/embed/2MqNR_PINto?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold py-2 text-center">
            La mayor comunidad Blockchain en Málaga
          </h1>
          <img src={People} alt="people" />
          <h3 className="text-xl py-4 text-center italic">
            Ya somos más de 700 personas en la comunidad 🚀✌️
          </h3>
          <button className="px-6 py-4 rounded-md bg-mainColor font-bold text-xl hover:scale-105 duration-300">
            ¡Únete a la comunidad! 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
