import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
    title: "Custom Software Development",
    description:
      "Scalable, high-performance solutions tailored to your business needs.",

  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600" /></div>,
    title: "E-commerce Store",
    description:
      "From small stores to large online retailers, we have the expertise to build a store that will help you grow your business.",

  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
    title: "Healthcare & Medical Solutions",
    description:
      "Secure and efficient platforms tailored for the healthcare industry.",

  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
    title: "Logistics & Supply Chain Management",
    description:
      "Optimize tracking, inventory, and operations for efficiency.",

  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-blue-600" /></div>,
    title: "App Development",
    description:
      "We build custom mobile apps for iOS and Android. Our apps are designed to be user-friendly and performant.",

  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-blue-600" /></div>,
    title: "Support",
    description:
      "We offer support for all our clients. We are here to help you with any issues or questions you may have.",

  },
];