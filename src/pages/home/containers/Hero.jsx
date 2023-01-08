import React from "react";
import HeroImage from "../assets/hero-image.png";
import People from "../assets/people.png";

const Hero = () => {
  return (
    <div className="w-full h-screen text-white items-center">
      <img
        src={HeroImage}
        alt="hero"
        className="absolute w-full h-full object-cover"
      />
      <div className="relative max-w-[1240px] px-6 h-full grid gap-6 md:grid-cols-2 mx-auto items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold py-2 sm:text-3xl md:text-4xl">
            Último evento
          </h1>
          <h2 className="text-xl py-2 text-center sm:text-2xl md:text-3xl">
            Web3, NFT y Metaverso | Oportunidades y retos
          </h2>
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/2MqNR_PINto?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold py-2 text-center">
            La mayor comunidad Blockchain en Málaga
          </h1>
          <img src={People} alt="people" />
          <h3 className="text-xl py-2 text-center italic">
            Ya somos más de 700 personas en la comunidad 🚀✌️
          </h3>
          <button className="px-4 py-4 text-sm rounded-md bg-mainColor font-semibold  sm:px-4 sm:py-6 md:text-xl hover:scale-105 duration-300">
            ¡Únete a la comunidad! 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
