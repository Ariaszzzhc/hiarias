import React from "react";

interface LandingProps {
  text: string;
}

export default function Landing({ text }: LandingProps) {
  return (
    <>
      <div className="bg-wblue-50 h-xl flex justify-center z-0">
        <h1 className="font-bold text-light-50 text-6xl pt-48">{text}</h1>
      </div>
    </>
  );
}
