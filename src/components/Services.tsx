"use client";

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

export const Services = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Streamline your business with our services
      </div>
      <p
        className="mt-4 text-lg font-normal text-neutral-300 max-w-lg   text-center mx-auto"
      >
        From custom software development to AI-driven solutions, Servora offers a wide range of services to help you build, scale, and optimize your business.
      </p>

      <CardHoverEffectDemo />
    </div>
  );
};


