"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Master of Science in Computer Application",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Currently Learn React Native & Angularjs",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Frontend Framework",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <Typography className="mb-6 mt-3 w-9/12 font-normal !text-gray-500">
            Highly skilled and creative Web Developer with 3+ years of
            experience in crafting visually stunning and functionally robust
            websites and web applications.
          </Typography>

          {/* ✅ Download Button */}
          <a
            href="/image/ReactJS-Nandhakumar-update.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="gray" className="w-fit">
              Download Resume
            </Button>
          </a>

        </div>

        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
