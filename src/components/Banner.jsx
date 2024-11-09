export default function Banner() {
  return (
    <>
      <div className=" relative h-80 w-full overflow-hidden">
        <img
          src="/assets/images/photoPortfolio.webp"
          className="relative h-full w-full object-cover object-center"
          alt="Bannière Julie, Développeuse Web Front-End"
        />
        <div className="absolute inset-0 bg-zinc-950/95"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-max-bannerWidthText flex flex-col space-y-2 sm:space-y-4">
            <h1 className=" text-4xl font-semibold text-white sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-left">
              <span className=" bg-gradient-to-r from-fuchsia-600 to-yellow-400 bg-clip-text text-transparent ">
                Julie,
              </span>
            </h1>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-left">
              Développeuse Web
            </h2>
            <div className="w-full flex justify-end">
              <h2 className="text-3xl font-thin text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-right">
                Front-End
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
