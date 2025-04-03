"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "./magicui/animated-list";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";
import dellcube from "../assets/services/dellcube-service.png"
import { BentoCard, BentoGrid } from "./magicui/bento-grid";

interface Item {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;

}

// let notifications = [
//   {
//     name: "Payment received",
//     description: "Magic UI",
//     time: "15m ago",
//     icon: "💸",
//     color: "#00C9A7",
//   },
//   {
//     name: "User signed up",
//     description: "Magic UI",
//     time: "10m ago",
//     icon: "👤",
//     color: "#FFB800",
//   },
//   {
//     name: "New message",
//     description: "Magic UI",
//     time: "5m ago",
//     icon: "💬",
//     color: "#FF3D71",
//   },
//   {
//     name: "New event",
//     description: "Magic UI",
//     time: "2m ago",
//     icon: "🗞️",
//     color: "#1E86FF",
//   },
// ];

let notifications = [
  {
    name: "Custom Software Development",
    description: "Scalable, high-performance solutions tailored to your business needs.",
    // time: "Now",
    icon: <PiMonitor className="w-6 h-6 text-blue-600" />,
    color: "#ffff",
  },
  {
    name: "E-commerce Store",
    description: "We build high-performing online stores for business growth.",
    // time: "Just now",
    icon: <PiStorefront className="w-6 h-6 text-blue-600" />,
    color: "#ffff",
  },
  {
    name: "Healthcare & Medical Solutions",
    description: "Secure and efficient platforms tailored for the healthcare industry.",
    // time: "Few moments ago",
    icon: <PiLock className="w-6 h-6 text-blue-600" />,
    color: "#ffff",
  },
  {
    name: "Logistics & Supply Chain Management",
    description: "Optimize tracking, inventory, and operations for efficiency.",
    // time: "A moment ago",
    icon: <PiMegaphone className="w-6 h-6 text-blue-600" />,
    color: "#ffff",
  },
  {
    name: "App Development",
    description: "We build custom mobile apps for iOS and Android.",
    // time: "Just updated",
    icon: <PiAppStoreLogo className="w-6 h-6 text-blue-600" />,
    color: "#ffff",
  },
  {
    name: "Support",
    description: "We provide 24/7 assistance for all our clients.",
    // time: "Recently",
    icon: <PiHeadsetFill className="w-6 h-6 text-blue-600" />,
    color: "#ffff",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, color, icon }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            {/* <span className="text-xs text-gray-500">{time}</span> */}
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};


const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];


const features = [
  {
    Icon: "",
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: dellcube
  },
  {
    Icon: "",
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: dellcube
  },
  {
    Icon: "",
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: dellcube
  },
  {
    Icon: "",
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: dellcube
  },
  {
    Icon: "",
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: dellcube
  },
];



export function Services({
  className,
}: {
  className?: string;
}) {
  return (
    <>
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div
            className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-400   dark:bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
          >
            Streamline your business with our services
          </div>
          <p
            className="mt-4 text-lg font-normal max-w-lg text-center mx-auto dark:text-neutral-300 text-black"
          >
            From custom software development to AI-driven solutions, Servora offers a wide range of services to help you build, scale, and optimize your business.
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full md:pt-20 pt-10">
          {/* Left Section */}
          <div className="relative flex h-[600px] w-full md:w-1/2 flex-col overflow-hidden p-2">
            <AnimatedList>
              {notifications.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
          </div>

          {/* Right Section */}
          <div className="relative flex  md:h-[600px]  w-full md:w-1/2 flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">

            <div className="grid gap-4">
              <div>
                <img className="h-100 w-100 max-w-full rounded-lg object-cover object-center md:h-[480px]" src={dellcube} />
              </div>
              <div className="  grid-cols-5 gap-4 hidden md:grid">
                <div>
                  <img src={dellcube} className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
                </div>
                <div>
                  <img src={dellcube} className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
                </div>
                <div>
                  <img src={dellcube} className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
                </div>
                <div>
                  <img src={dellcube} className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
                </div>
                <div>
                  <img src={dellcube} className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
                </div>

              </div>
            </div>



          </div>
        </div>
      </div>


    </>
  );
}





// "use client";

// import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

// export const Services = () => {
//   return (
//     <div className="max-w-5xl mx-auto">
//       <div
//         className="text-4xl pb-5 md:text-7xl text-center
//          bg-clip-text text-transparent bg-gradient-to-b
//           from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
//       >
//         Streamline your business with our services
//       </div>
//       <p
//         className="mt-4 text-lg font-normal text-neutral-300 max-w-lg   text-center mx-auto"
//       >
//         From custom software development to AI-driven solutions, Servora offers a wide range of services to help you build, scale, and optimize your business.
//       </p>

//       <CardHoverEffectDemo />
//     </div>
//   );
// };


