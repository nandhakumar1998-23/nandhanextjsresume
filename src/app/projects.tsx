"use client";

import Image, { StaticImageData } from "next/image";
import { Typography } from "@material-tailwind/react";
import violet from "../../public/image/violet.png";
import zebra from "../../public/image/zebra.png";
import Magudam from "../../public/image/magudam.png";
import ashroomz from "../../public/image/ashroomz.png";
import ashhotels from "../../public/image/ashhotels.png";
import pavico from "../../public/image/pavico.png";
import balasastha from "../../public/image/balasastha.png";
import skylink from "../../public/image/skylink.png";
import Zeacode from "../../public/image/zeacode.png";

// Individual project card
type ProjectCardProps = {
  img: string; // or StaticImageData if using imported images
  title: string;
  link: string;
  desc: string;
};

function ProjectCard({ img, title, link, desc }: ProjectCardProps) {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={title} className="w-full h-52 object-cover" />
      </a>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}


const PROJECTS = [
  {
    img: violet,
    title: "Violet Infotech",
    link: "https://www.violetinfotech.in/",
    desc: "Web App — Bootstrap used",
  },
  {
    img: zebra,
    title: "Zebra Sign World",
    link: "https://reactzebranew.netlify.app/",
    desc: "Web App — ReactJS + Vite",
  },
  {
    img: Magudam,
    title: "Magudam Education",
    link: "https://www.sbind.in/",
    desc: "Web App — DRF (Django REST Framework)",
  },
  {
    img: ashroomz,
    title: "Ashroomz",
    link: "https://ashroomz.in/",
    desc: "Web App — Bootstrap + Laravel",
  },
  {
    img: ashhotels,
    title: "Ashhotels",
    link: "https://www.ashhotels.in/",
    desc: "Web App — Bootstrap + Laravel",
  },
  {
    img: pavico,
    title: "Pavicouae",
    link: "https://pavicouae.com/",
    desc: "Web App — Bootstrap + Laravel",
  },
  {
    img: skylink,
    title: "Skylink",
    link: "https://www.skylink.net.in/",
    desc: "WordPress Website",
  },
  {
    img: balasastha,
    title: "Bala Sastha Studio",
    link: "https://balasasthastudio.netlify.app/",
    desc: "Frontend — Bootstrap + EmailJS",
  },
  {
    img: Zeacode,
    title: "Zeacode",
    link: "https://zeacode.netlify.app/",
    desc: "Web App — React + Vite + TypeScript",
  },
];

export default function Projects() {
  return (
    <section className="py-28 px-8 bg-gray-50">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4 font-bold">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-600 lg:w-6/12"
        >
          Whether you have a web app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-2">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
