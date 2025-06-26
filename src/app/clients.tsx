"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          Languages
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <span className="text-blue-600 font-bold text-lg">ReactJs</span>-
          <span className="text-purple-600 font-bold text-lg">NextJs</span>-
          <span className="text-teal-500 font-bold text-lg">Tailwind CSS</span>-
          <span className="text-pink-600 font-bold text-lg">HTML</span>-
          <span className="text-red-600 font-bold text-lg">CSS</span>-
          <span className="text-yellow-600 font-bold text-lg">JS</span>-
          <span className="text-black-200 font-bold text-lg">UI/UX</span>-
          <span className="text-green-600 font-bold text-lg">SEO</span>-
          <span className="text-indigo-600 font-bold text-lg">WordPress</span>-
          <span className="text-cyan-600 font-bold text-lg">Webflow</span>-
          <span className="text-gray-600 font-bold text-lg">Django(DRF)</span>
          {/* {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-40"
              src={`/logos/logo-${logo}.svg`}
            />
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default Clients;
