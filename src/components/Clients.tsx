
import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee.tsx";
import dellcube from "../assets/clients/dellcube.png"
// import ctrlClothing from "../assets/clients/ctrlClothing.png"

const reviews = [
  {
    img: dellcube,
  },
  {
    img: dellcube,
  },
  {
    img: dellcube,
  },
  {
    img: dellcube,
  },
  {
    img: dellcube,
  },
  {
    img: dellcube,
  },

];

const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img
}: {
  img: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden    p-4",
        // light styles
        // "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        // "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="w-100 h-100 object-cover" alt="" src={img} />
      </div>
    </figure>
  );
};

export function Clients() {
  return (
    <section className="pt-10 sm:pt-14">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.img} {...review} />
          ))}
        </Marquee>
         
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}

