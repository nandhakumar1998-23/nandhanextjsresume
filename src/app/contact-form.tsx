"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  EnvelopeIcon,
  PhoneIcon,
  TicketIcon,
} from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Us
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography>
      </div>

      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            {/* Left Side: Contact Info */}
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Fill up the form and our Team will get back to you within 24
                hours.
              </Typography>

              {/* Phone */}
              <div className="flex gap-5 mb-2">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white">
                  7448516897
                </Typography>
              </div>

              {/* Email */}
              <div className="flex gap-5 mb-2">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white">
                  nandhakumarid023@gmail.com
                </Typography>
              </div>

              {/* Netlify */}
              <div className="flex gap-5 mb-6">
                <TicketIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white">
                  <a
                    href="https://app.netlify.com/teams/nandhakumar1998-23/projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Netlify Projects
                  </a>
                </Typography>
              </div>

              {/* Netlify */}
              <div className="flex gap-5 mb-6">
                <TicketIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white">
                  <a
                    href="https://github.com/nandhakumar1998-23/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Github
                  </a>
                </Typography>
              </div>

              {/* Socials */}
              <Typography variant="h6" color="white" className="mb-2">
                Connect with me:
              </Typography>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white">
                  <a
                    href="https://github.com/nandhakumar1998-23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <i className="fa-brands fa-github text-xl" />
                  </a>
                </IconButton>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form action="#">
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="first-name"
                    placeholder="eg. Nandha"
                    containerProps={{ className: "!min-w-full mb-3 md:mb-0" }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="last-name"
                    placeholder="eg. Kumar"
                    containerProps={{ className: "!min-w-full" }}
                  />
                </div>

                {/* Email */}
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="email"
                  placeholder="eg. nandha@mail.com"
                  containerProps={{ className: "!min-w-full mb-8" }}
                />

                {/* Interest */}
                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                >
                  What are you interested in?
                </Typography>
                <div className="-ml-3 mb-14">
                  {/* @ts-ignore */}
                  <Radio color="gray" name="type" label="Design" defaultChecked />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="type" label="Development" />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="type" label="Support" />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="type" label="Other" />
                </div>

                {/* Message */}
                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="message"
                  containerProps={{ className: "!min-w-full mb-8" }}
                />

                <div className="w-full flex justify-end">
                  <Button className="w-full md:w-fit" color="gray" size="md">
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
