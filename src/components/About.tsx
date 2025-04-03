import HeroVideoDialog from "./magicui/hero-video-dialog";

export function About() {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <div
          className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-400   dark:bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
        >
          About Us
        </div>
        <p
          className="mt-4 text-lg font-normal max-w-lg text-center mx-auto dark:text-neutral-300 text-black"
        >
          See how businesses thrive with Servora! From web development to AI solutions, our clients trust us to deliver excellence.
        </p>
      </div>
      <section className="container pt-20 md:py-22">

        <div className="relative">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </section>
    </>
  );
}
