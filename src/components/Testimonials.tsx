import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const reviews = [
  {
    "name": "DellCube",
    "username": "@DellCubeTech",
    "body": "Servora’s expertise in product development helped us streamline our IT solutions with cutting-edge innovations. Their approach to problem-solving is simply outstanding!",
    "img": "https://dellcube-stg.vercel.app/images/user/common/dellcube-favicon.png"
  },
  {
    "name": "CtrlClothing",
    "username": "@CtrlFashion",
    "body": "From website development to marketing strategy, Servora handled everything with precision and creativity. Highly recommended!",
    "img": "https://ctrlclothing.in/wp-content/uploads/2025/03/cropped-FINAL-LOGO.webp"
  },
  {
    "name": "Cybertix",
    "username": "@CyberShield",
    "body": "Servora played a crucial role in building our cybersecurity solutions. Their technical prowess and strategic input were invaluable!",
    "img": "https://cybertix.in/wp-content/uploads/2021/09/Cybertix-final_4-min-2.gif"
  },
  {
    "name": "DellCube",
    "username": "@DellCubeTech",
    "body": "Servora’s expertise in product development helped us streamline our IT solutions with cutting-edge innovations. Their approach to problem-solving is simply outstanding!",
    "img": "https://dellcube-stg.vercel.app/images/user/common/dellcube-favicon.png"
  },
  {
    "name": "CtrlClothing",
    "username": "@CtrlFashion",
    "body": "From website development to marketing strategy, Servora handled everything with precision and creativity. Highly recommended!",
    "img": "https://ctrlclothing.in/wp-content/uploads/2025/03/cropped-FINAL-LOGO.webp"
  },
  {
    "name": "Cybertix",
    "username": "@CyberShield",
    "body": "Servora played a crucial role in building our cybersecurity solutions. Their technical prowess and strategic input were invaluable!",
    "img": "https://cybertix.in/wp-content/uploads/2021/09/Cybertix-final_4-min-2.gif"
  },

];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-100 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <div className=" md:pt-20 pt-10">
      <div className="max-w-5xl mx-auto">
        <div
          className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-400   dark:bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
        >
          What Our Clients Say About Servora
        </div>
        <p
          className="mt-4 text-lg font-normal max-w-lg text-center mx-auto dark:text-neutral-300 text-black"
        >
          See how businesses thrive with Servora! From web development to AI solutions, our clients trust us to deliver excellence.
        </p>
      </div>
      <section className="container pt-20 md:py-22">
        <div className="relative md:flex h-[600px] w-full flex-row items-center justify-center overflow-hidden">
          <Marquee pauseOnHover vertical className="[--duration:5s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:5s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:5s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>
      </section>
    </div>
  );
}
