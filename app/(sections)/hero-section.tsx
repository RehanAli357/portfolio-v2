import Image from "next/image";
import React from "react";
import StarBorder from "../(helper)/shiny-text";
import Orb from "../(helper)/orb";
import LinkedImg from "../../public/linkedin.png";
import GithubImg from "../../public/github.png";

const HeroSection = () => {
  return (
    <div className="sticky inset-0 h-screen z-0 overflow-hidden flex items-center justify-center">
      {/* Social Icons */}
      <div className="flex gap-3 mt-2 justify-end pr-2 absolute top-4 right-0 z-10">
        <a
          href="https://github.com/RehanAli357"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={GithubImg}
            alt="GitHub"
            width={30}
            height={30}
            className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px]"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rehan-ali-b97964247/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={LinkedImg}
            alt="LinkedIn"
            width={30}
            height={30}
            className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px]"
          />
        </a>
      </div>
      {/* Main Content */}
      <div className="w-full flex flex-col items-center justify-center h-full relative z-10">
        <h1
          className="text-[9vw] sm:text-[55px] md:text-[65px] lg:text-[80px] uppercase text-amber-50 font-bold text-center px-2 opacity-0 animate-fade-in"
          style={{ animationDelay: "0s" }}
        >
          Hi I am Mohd. Rehan Ali
        </h1>
        <h2
          className="text-[6vw] sm:text-[38px] md:text-[45px] lg:text-[56px] uppercase text-amber-50 font-bold text-center px-2 mt-2 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          Full Stack Developer
        </h2>
        <StarBorder
          as={"button"}
          className="mt-8 px-8 py-3 text-base sm:text-lg opacity-0 animate-fade-in"
          color="white"
          speed="1.5s"
          thickness={1}
          style={{ animationDelay: "1s" }}
        >
          About me
        </StarBorder>
      </div>
      {/* Orb Background */}
      <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
        <Orb
          hoverIntensity={0.17}
          rotateOnHover={true}
          hue={300}
          forceHoverState={false}
        />
      </div>
    </div>
  );
};

export default HeroSection;
