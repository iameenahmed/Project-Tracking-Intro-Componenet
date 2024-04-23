import illustration from "../assets/images/illustration-devices.svg";

function Hero() {
  return (
    <main>
      <div className="md:mt-[6.875rem] lg:flex lg:items-center lg:justify-around xl:gap-16">
        <div className="mb-20 mt-16 w-[30rem] md:w-full lg:order-2 lg:my-0 lg:-mr-[35vw]">
          <img src={illustration} alt="illustration of devices" />
        </div>

        <div className="px-6 md:px-0 lg:basis-1/2">
          <h1 className="mb-4 font-BarlowCondensed uppercase tracking-[0.3em] text-GrayishBlue">
            <span className="mr-3 rounded-full bg-VeryDarkBlue px-3 py-1 font-bold tracking-wider text-white">
              New
            </span>
            Monograph Dashboard
          </h1>
          <h2 className="mb-8 font-BarlowCondensed text-4xl font-bold uppercase text-VeryDarkBlue lg:text-[4rem] lg:leading-none">
            Powerful insights into your team
          </h2>
          <p className="text-[18px] text-DarkGrayishBlue md:mr-20 xl:mr-60">
            Project planning and time tracking for agile teams
          </p>
          <div className="mt-12 flex gap-4 font-BarlowCondensed md:mt-16 md:gap-5">
            <button className="rounded-md bg-Red px-5 py-2.5 font-bold uppercase tracking-wider text-white hover:opacity-70 md:px-8 md:py-3">
              Schedule a demo
            </button>
            <button className="uppercase tracking-wider text-GrayishBlue md:tracking-[0.3em]">
              to see a preview
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Hero;
