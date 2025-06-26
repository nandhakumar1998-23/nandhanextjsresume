"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";
import Nandha from "../../public/image/nandha.jpg"

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
              variant="h1"
              color="blue-gray"
              className="mb-4 lg:text-5xl !leading-tight text-3xl"
            >
              Building Modern Web Experiences <br /> with Clean & Scalable Code
            </Typography>

            <Typography
              variant="lead"
              className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
            >
              I’m Nandhakumar, a professional web developer specialized in React.js, Next.js, Django, and Tailwind CSS. I bring advanced frontend and backend skills to deliver fast, secure, and responsive websites. Explore my portfolio to see real client projects and live demos.
            </Typography>

            <div className="grid">
              <Typography
                variant="small"
                className="mb-2 text-gray-900 font-medium"
              >
                Contact me for a website or collaboration
              </Typography>
              <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
                <Input color="gray" label="Enter your email" size="lg" />
                <Button color="gray" className="w-full px-4 md:w-[12rem]">
                  Get a Quote
                </Button>
              </div>
            </div>

            <Typography variant="small" className="font-normal !text-gray-500">
              Let’s build something powerful — view my{" "}
              <a href="#portfolio" className="font-medium underline transition-colors">
                Portfolio
              </a>
            </Typography>

        </div>
       <Image
          width={1024}
          height={1024}
          alt="team work"
          src={Nandha}
          className="w-full h-[36rem] object-cover object-top rounded-xl"
        />

      </div>
    </header>
  );
}

export default Hero;
