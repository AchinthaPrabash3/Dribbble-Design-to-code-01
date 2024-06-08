const HeroSection = () => {
  return (
    <section className="pt-24 pb-36 flex items-center justify-center relative">
      <div className="-space-y-8">
        <div className="flex items-center space-x-5">
          <h1 className="text-[200px] leading-none capitalize">webel</h1>
          <p className="text-4xl font-extralight leading-normal">
            webel resources provides the <br /> latest and updates information{" "}
            <br />
            in the world
          </p>
        </div>
        <h1 className="text-[200px] leading-none capitalize after:content-['news'] after:text-4xl flex items-start  after:mt-16 after:px-12 after:py-3 after:rounded-full after:ml-3 after:bg-amber-600 after:italic after:text-white">
          resources
        </h1>
      </div>
    </section>
  );
};
export default HeroSection;
