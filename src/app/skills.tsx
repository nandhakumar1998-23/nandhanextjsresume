"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "React & Next.js Development",
    children:
      "I build high-performance web applications using React and Next.js, ensuring fast loading times, seamless routing, and scalable architecture for modern business needs.",
  },
  {
    icon: FingerPrintIcon,
    title: "UI/UX Design",
    children:
      "Design isn't just about looks—it's about experience. I craft intuitive, user-friendly interfaces that enhance user journeys and boost engagement through smart UI/UX design.",
  },
  {
    icon: SwatchIcon,
    title: "SEO & Web Optimization",
    children:
      "From on-page SEO to performance tuning, I help websites rank better on search engines and deliver fast, optimized experiences to every visitor.",
  },
  {
    icon: HashtagIcon,
    title: "WordPress & Webflow",
    children:
      "Whether it's a custom WordPress website or a visually stunning Webflow design, I provide flexible CMS-based solutions tailored to client needs.",
  },
  {
    icon: EyeIcon,
    title: "API Integration with Django REST Framework",
    children:
      "I develop secure, scalable backends using Django REST Framework (DRF), and integrate APIs with React/Next frontends to deliver robust full-stack solutions.",
  },
  {
    icon: DocumentTextIcon,
    title: "Full-Stack Project Delivery",
    children:
      "From wireframing and development to deployment and post-launch support, I offer end-to-end project management with clean code and high quality standards.",
  },
];


export function Skills() {
  return (
    <>
    <section className="px-8">
  <div className="container mx-auto mb-20 text-center">
    <Typography color="blue-gray" className="mb-2 font-bold uppercase">
      Experience
    </Typography>
    <Typography variant="h1" color="blue-gray" className="mb-4">
      My Work History
    </Typography>
    <Typography
      variant="lead"
      className="mx-auto w-full !text-gray-500 lg:w-10/12"
    >
      From startup beginnings to leading teams in tech firms, my journey reflects a strong foundation in frontend development, UI/UX design, and full-stack integrations. Explore how I’ve shaped digital solutions across different industries.
    </Typography>
  </div>

  <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
    {/* Violet Infotech */}
    <div className="p-6 rounded-xl shadow-lg bg-white">
      <h3 className="text-xl font-bold text-purple-700 mb-2">Violet Infotech</h3>
      <p className="text-sm text-gray-500 mb-2">June 9, 2025 – May 29, 2024</p>
      <p className="text-gray-700 text-sm leading-relaxed">
        Led frontend projects using Bootstrap, ReactJS, WordPress, and Webflow. Supported backend with Django, integrated Electron.js for cross-platform apps, and developed a chatbot using Dialogflow. Delivered ERP solutions with advanced UI/UX and exceeded client expectations.
      </p>
    </div>

    {/* Thiran Infotech */}
    <div className="p-6 rounded-xl shadow-lg bg-white">
      <h3 className="text-xl font-bold text-blue-700 mb-2">Thiran Infotech</h3>
      <p className="text-sm text-gray-500 mb-2">May 28, 2024 – April 3, 2023</p>
      <p className="text-gray-700 text-sm leading-relaxed">
        Built responsive UIs using React and Laravel. Worked on AshHotel, AshRooms, and Pavico. Led SEO strategies, ran Google Ads, and created marketing content in Canva. Delivered API-integrated, user-friendly platforms on time.
      </p>
    </div>

    {/* Silver Dollar Tech */}
    <div className="p-6 rounded-xl shadow-lg bg-white">
      <h3 className="text-xl font-bold text-green-700 mb-2">Silver Dollar Tech</h3>
      <p className="text-sm text-gray-500 mb-2">Dec 30, 2022 – April 15, 2022</p>
      <p className="text-gray-700 text-sm leading-relaxed">
        Worked as an XML/HTML Operator on a Bible app project. Handled structured XML, built clean interfaces in .NET, and enhanced UI/UX through thoughtful design and collaboration with cross-functional teams.
      </p>
    </div>
  </div>
</section>
<br /><br />
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
    </>
  );
}

export default Skills;
