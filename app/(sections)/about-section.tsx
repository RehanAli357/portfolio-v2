"use client";
import React, { useRef, useEffect, useState } from "react";
import ProfileCard from "../(helper)/user-card";
import StarBorder from "../(helper)/shiny-text";
import CallImg from "../../public/call.png";
import MailImg from "../../public/email.png";
import DownloadImg from "../../public/download.png";
import Image from "next/image";
const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col-reverse md:flex-row justify-center items-center py-12 px-4 gap-8 md:gap-0 relative min-h-screen bg-black font-sans transition-all duration-1000
      ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }
    `}
      style={{
        overflow: "hidden",
        fontFamily: `'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'`,
      }}
    >
      <div className="w-full flex justify-center mb-8 md:mb-0">
        <div>
          <h2 className="text-amber-50 text-sm md:text-lg lg:text-2xl max-w-xl text-center md:text-left font-semibold">
            The only way to do great work is to love what you do.” With a strong
            foundation in building scalable web applications, I enjoy working
            across both front-end and back-end technologies to create seamless
            digital experiences. I thrive on solving complex problems, learning
            new tools, and bringing ideas to life through clean, efficient, and
            user-focused code. For me, development is not just a profession—it’s
            a craft I truly love, and that passion drives me to constantly
            improve and deliver impactful solutions.
          </h2>
          <div className="gap-3 mt-4 flex flex-row flex-wrap justify-center items-center sm:flex-row sm:justify-start ">
            <StarBorder
              as={"button"}
              color="white"
              speed="1.5s"
              thickness={1}
              onClick={() => (window.location.href = "tel:7017337726")}
            >
              <Image src={CallImg} alt="Call" width={20} height={20} />
            </StarBorder>

            <StarBorder
              as={"button"}
              color="white"
              speed="1.5s"
              thickness={1}
              onClick={() =>
                (window.location.href = "mailto:mohdrehanali40@gmail.com")
              }
            >
              <Image src={MailImg} alt="Mail" width={20} height={20} />
            </StarBorder>
            <StarBorder
              as={"button"}
              color="white"
              speed="1.5s"
              thickness={1}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/RehanResume.pdf";
                link.download = "resume.pdf";
                link.click();
              }}
            >
              <div className="flex items-center gap-2">
                <Image src={DownloadImg} alt="Mail" width={20} height={20} />
                Download CV
              </div>
            </StarBorder>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="max-w-xs w-full flex justify-center relative z-10">
          <ProfileCard
            name="Mohd. Rehan Ali"
            title="Full Stack Developer"
            handle="RehanAli357"
            status="Online"
            contactText="Contact Me"
            avatarUrl={"/user.png"}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => {
              window.open("https://wa.me/7017337726", "_blank");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
