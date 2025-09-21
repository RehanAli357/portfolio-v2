"use client";
import React from "react";

type StarBorderProps = {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  onClick,
  style = {},
  ...rest
}: StarBorderProps) => {
  return (
    <Component
      onClick={onClick}
      className={`relative inline-block overflow-hidden rounded-[20px] transition-shadow duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.03] ${className} hover:cursor-pointer`}
      style={{
        padding: `${thickness}px 0`,
        ...style,
      }}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="relative z-10 bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-center text-[16px] py-[18px] px-[32px] rounded-[18px] transition-colors duration-300 hover:border-white hover:bg-gradient-to-b hover:from-gray-900 hover:to-black">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
