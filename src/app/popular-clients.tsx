"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import violet from "../../public/image/violet.png";
import zebra from "../../public/image/zebra.png";
import sbind from "../../public/image/magudam.png";
import ashhotels from "../../public/image/ashhotels.png";
import ashroomz from "../../public/image/ashroomz.png";
import pavico from "../../public/image/pavico.png";

const PROJECTS = [
  { name: "Balasasthastudio", img: violet },
  { name: "Connect App", img: zebra },
  { name: "SBIND (Magudam)", img: sbind },
  { name: "Ash Hotels", img: ashhotels },
  { name: "Ash Roomz", img: ashroomz },
  { name: "Pavico UAE", img: pavico },
];

export function PopularProjects() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
          Popular Projects
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-10">
          My Recent Website Projects
        </Typography>

        <div className="flex flex-wrap justify-center gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="text-center max-w-[180px]">
              
              <Typography variant="small" className="text-gray-700 font-semibold">
                {project.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularProjects;
